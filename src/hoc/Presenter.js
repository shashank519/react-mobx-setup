/* eslint-disable import/prefer-default-export */
import React, { Component } from "react";
import { observer } from "mobx-react";
import { forEach } from "lodash";

/**
 * Observer function / decorator
 */
export const presenter = (Presenter, View, statics) => {
  // stateless component
  if (Presenter && View) {
    const ViewComp = observer(View);
    class WrappedView extends Component {
      static View = View;
      constructor(props) {
        super(props);

        this.allProps = Object.assign({}, View.defaultProps, props);
        this.pm = props.pm || new Presenter(this.allProps, this);

        this.pm._hoc = !props.pm;
        this.view = View;
      }

      shouldComponentUpdate(nextProps, nextState) {
        if (this.pm.shouldComponentUpdate) {
          return this.pm.shouldComponentUpdate(nextProps, nextState);
        }
        return true;
      }

      componentDidMount() {
        this.pm.mounted && this.pm.mounted();
      }

      componentWillMount() {
        this.pm.fetch && this.pm.fetch();
      }

      componentWillReceiveProps(next) {
        this.pm.update && this.pm.update(next);
      }

      componentWillUnmount() {
        this.pm.dispose && this.pm.dispose();
      }

      render() {
        return <ViewComp {...this.props} pm={this.pm} />;
      }
    }

    if (statics) {
      forEach(statics, (val, key) => (WrappedView[key] = val));
    }
    return WrappedView;
  }

  // invoked as a decorator
  return componentClass => presenter(Presenter, componentClass, statics);
};

/**
 * https://github.com/andreypopp/autobind-decorator
 * @param {*} target
 * @param {*} key
 * @param {*} descriptor
 */
export const autobind = (target, key, descriptor) => {
  let fn = descriptor.value;

  if (typeof fn !== "function") {
    throw new Error(
      `@autobind decorator can only be applied to methods not: ${typeof fn}`
    );
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  let definingProperty = false;

  return {
    configurable: true,
    get() {
      if (
        definingProperty ||
        this === target.prototype ||
        this.hasOwnProperty(key) ||
        typeof fn !== "function"
      ) {
        return fn;
      }

      let boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        configurable: true,
        get() {
          return boundFn;
        },
        set(value) {
          fn = value;
          delete this[key];
        }
      });
      definingProperty = false;
      return boundFn;
    },
    set(value) {
      fn = value;
    }
  };
};
