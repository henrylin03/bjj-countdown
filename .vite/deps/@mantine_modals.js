"use client";
import {
  Box,
  Button,
  Group,
  Modal,
  createUseExternalEvents,
  getDefaultZIndex
} from "./chunk-RMBUVL4Y.js";
import "./chunk-MDIHFEFG.js";
import {
  randomId
} from "./chunk-O32VBVJP.js";
import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/@mantine/modals/esm/ModalsProvider.js
var import_react4 = __toESM(require_react());

// node_modules/@mantine/modals/esm/context.js
var import_react = __toESM(require_react());
var ModalsContext = (0, import_react.createContext)(null);
ModalsContext.displayName = "@mantine/modals/ModalsContext";

// node_modules/@mantine/modals/esm/ConfirmModal.js
var import_react3 = __toESM(require_react());

// node_modules/@mantine/modals/esm/use-modals/use-modals.js
var import_react2 = __toESM(require_react());
function useModals() {
  const ctx = (0, import_react2.useContext)(ModalsContext);
  if (!ctx) {
    throw new Error(
      "[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component"
    );
  }
  return ctx;
}

// node_modules/@mantine/modals/esm/ConfirmModal.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function ConfirmModal({
  id,
  cancelProps,
  confirmProps,
  labels = { cancel: "", confirm: "" },
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  children
}) {
  const { cancel: cancelLabel, confirm: confirmLabel } = labels;
  const ctx = useModals();
  const handleCancel = (event) => {
    typeof (cancelProps == null ? void 0 : cancelProps.onClick) === "function" && (cancelProps == null ? void 0 : cancelProps.onClick(event));
    typeof onCancel === "function" && onCancel();
    closeOnCancel && ctx.closeModal(id);
  };
  const handleConfirm = (event) => {
    typeof (confirmProps == null ? void 0 : confirmProps.onClick) === "function" && (confirmProps == null ? void 0 : confirmProps.onClick(event));
    typeof onConfirm === "function" && onConfirm();
    closeOnConfirm && ctx.closeModal(id);
  };
  return import_react3.default.createElement(import_react3.default.Fragment, null, children && import_react3.default.createElement(Box, { mb: "md" }, children), import_react3.default.createElement(Group, __spreadValues({ justify: "flex-end" }, groupProps), import_react3.default.createElement(Button, __spreadProps(__spreadValues({ variant: "default" }, cancelProps), { onClick: handleCancel }), (cancelProps == null ? void 0 : cancelProps.children) || cancelLabel), import_react3.default.createElement(Button, __spreadProps(__spreadValues({}, confirmProps), { onClick: handleConfirm }), (confirmProps == null ? void 0 : confirmProps.children) || confirmLabel)));
}

// node_modules/@mantine/modals/esm/reducer.js
function handleCloseModal(modal, canceled) {
  var _a, _b, _c, _d;
  if (canceled && modal.type === "confirm") {
    (_b = (_a = modal.props).onCancel) == null ? void 0 : _b.call(_a);
  }
  (_d = (_c = modal.props).onClose) == null ? void 0 : _d.call(_c);
}
function modalsReducer(state, action) {
  switch (action.type) {
    case "OPEN": {
      return {
        current: action.modal,
        modals: [...state.modals, action.modal]
      };
    }
    case "CLOSE": {
      const modal = state.modals.find((m) => m.id === action.modalId);
      if (!modal) {
        return state;
      }
      handleCloseModal(modal, action.canceled);
      const remainingModals = state.modals.filter((m) => m.id !== action.modalId);
      return {
        current: remainingModals[remainingModals.length - 1] || state.current,
        modals: remainingModals
      };
    }
    case "CLOSE_ALL": {
      if (!state.modals.length) {
        return state;
      }
      state.modals.concat().reverse().forEach((modal) => {
        handleCloseModal(modal, action.canceled);
      });
      return {
        current: state.current,
        modals: []
      };
    }
    default: {
      return state;
    }
  }
}

// node_modules/@mantine/modals/esm/events.js
var [useModalsEvents, createEvent] = createUseExternalEvents("mantine-modals");
var openModal = createEvent("openModal");
var closeModal = createEvent("closeModal");
var closeAllModals = createEvent("closeAllModals");
var openConfirmModal = createEvent("openConfirmModal");
var openContextModal = (payload) => createEvent("openContextModal")(payload);
var modals = {
  open: openModal,
  close: closeModal,
  closeAll: closeAllModals,
  openConfirmModal,
  openContextModal
};

// node_modules/@mantine/modals/esm/ModalsProvider.js
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function separateConfirmModalProps(props) {
  if (!props) {
    return { confirmProps: {}, modalProps: {} };
  }
  const _a = props, {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    groupProps,
    labels
  } = _a, others = __objRest(_a, [
    "id",
    "children",
    "onCancel",
    "onConfirm",
    "closeOnConfirm",
    "closeOnCancel",
    "cancelProps",
    "confirmProps",
    "groupProps",
    "labels"
  ]);
  return {
    confirmProps: {
      id,
      children,
      onCancel,
      onConfirm,
      closeOnConfirm,
      closeOnCancel,
      cancelProps,
      confirmProps,
      groupProps,
      labels
    },
    modalProps: __spreadValues2({
      id
    }, others)
  };
}
function ModalsProvider({ children, modalProps, labels, modals: modals2 }) {
  const [state, dispatch] = (0, import_react4.useReducer)(modalsReducer, { modals: [], current: null });
  const stateRef = (0, import_react4.useRef)(state);
  stateRef.current = state;
  const closeAll = (0, import_react4.useCallback)(
    (canceled) => {
      dispatch({ type: "CLOSE_ALL", canceled });
    },
    [stateRef, dispatch]
  );
  const openModal2 = (0, import_react4.useCallback)(
    (_a) => {
      var _b = _a, { modalId } = _b, props = __objRest(_b, ["modalId"]);
      const id = modalId || randomId();
      dispatch({
        type: "OPEN",
        modal: {
          id,
          type: "content",
          props
        }
      });
      return id;
    },
    [dispatch]
  );
  const openConfirmModal2 = (0, import_react4.useCallback)(
    (_c) => {
      var _d = _c, { modalId } = _d, props = __objRest(_d, ["modalId"]);
      const id = modalId || randomId();
      dispatch({
        type: "OPEN",
        modal: {
          id,
          type: "confirm",
          props
        }
      });
      return id;
    },
    [dispatch]
  );
  const openContextModal2 = (0, import_react4.useCallback)(
    (modal, _e) => {
      var _f = _e, { modalId } = _f, props = __objRest(_f, ["modalId"]);
      const id = modalId || randomId();
      dispatch({
        type: "OPEN",
        modal: {
          id,
          type: "context",
          props,
          ctx: modal
        }
      });
      return id;
    },
    [dispatch]
  );
  const closeModal2 = (0, import_react4.useCallback)(
    (id, canceled) => {
      dispatch({ type: "CLOSE", modalId: id, canceled });
    },
    [stateRef, dispatch]
  );
  useModalsEvents({
    openModal: openModal2,
    openConfirmModal: openConfirmModal2,
    openContextModal: (_g) => {
      var _h = _g, { modal } = _h, payload = __objRest(_h, ["modal"]);
      return openContextModal2(modal, payload);
    },
    closeModal: closeModal2,
    closeContextModal: closeModal2,
    closeAllModals: closeAll
  });
  const ctx = {
    modals: state.modals,
    openModal: openModal2,
    openConfirmModal: openConfirmModal2,
    openContextModal: openContextModal2,
    closeModal: closeModal2,
    closeContextModal: closeModal2,
    closeAll
  };
  const getCurrentModal = () => {
    const currentModal = stateRef.current.current;
    switch (currentModal == null ? void 0 : currentModal.type) {
      case "context": {
        const _a = currentModal.props, { innerProps } = _a, rest = __objRest(_a, ["innerProps"]);
        const ContextModal = modals2[currentModal.ctx];
        return {
          modalProps: rest,
          content: import_react4.default.createElement(ContextModal, { innerProps, context: ctx, id: currentModal.id })
        };
      }
      case "confirm": {
        const { modalProps: separatedModalProps, confirmProps: separatedConfirmProps } = separateConfirmModalProps(currentModal.props);
        return {
          modalProps: separatedModalProps,
          content: import_react4.default.createElement(
            ConfirmModal,
            __spreadProps2(__spreadValues2({}, separatedConfirmProps), {
              id: currentModal.id,
              labels: currentModal.props.labels || labels
            })
          )
        };
      }
      case "content": {
        const _b = currentModal.props, { children: currentModalChildren } = _b, rest = __objRest(_b, ["children"]);
        return {
          modalProps: rest,
          content: import_react4.default.createElement(import_react4.default.Fragment, null, currentModalChildren)
        };
      }
      default: {
        return {
          modalProps: {},
          content: null
        };
      }
    }
  };
  const { modalProps: currentModalProps, content } = getCurrentModal();
  return import_react4.default.createElement(ModalsContext.Provider, { value: ctx }, import_react4.default.createElement(
    Modal,
    __spreadProps2(__spreadValues2(__spreadValues2({
      zIndex: getDefaultZIndex("modal") + 1
    }, modalProps), currentModalProps), {
      opened: state.modals.length > 0,
      onClose: () => closeModal2(state.current.id)
    }),
    content
  ), children);
}
export {
  ModalsProvider,
  closeAllModals,
  closeModal,
  modals,
  openConfirmModal,
  openContextModal,
  openModal,
  useModals
};
//# sourceMappingURL=@mantine_modals.js.map
