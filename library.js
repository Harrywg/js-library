export const createEl = (tag, parent = virtualRoot) => {
  const el = document.createElement(tag);
  const events = {};
  let children = [];
  const setEl = (func) => {
    if (func) func(el);
    render();
  };

  const setEvent = (eventName, func) => {
    events[eventName] = func;
    render();
  };

  const getEvents = () => {
    return { ...events };
  };

  const removeEvent = (eventName) => {
    delete events[eventName];
  };

  const _setChildren = (func) => {
    children = func(children);
  };

  const getChildren = () => {
    return [...children];
  };

  const elementObject = {
    el,
    setEl,
    setEvent,
    getEvents,
    removeEvent,
    getChildren,
    _setChildren,
  };

  parent._setChildren((prevChildren) => {
    return [...prevChildren, elementObject];
  });

  return elementObject;
};

const createRoot = () => {
  let children = [];

  const _setChildren = (func) => {
    children = func(children);
  };

  const getEvents = () => {
    return {};
  };

  const getChildren = () => {
    return [...children];
  };

  const el = document.createElement("div");
  el.id = "root";
  return { el, _setChildren, getChildren, getEvents };
};

const virtualRoot = createRoot();

const render = () => {
  const root = document.getElementById("root");

  const renderElement = ({ ...virtualEl }) => {
    const el = virtualEl.el.cloneNode(true);
    const events = virtualEl.getEvents();
    Object.keys(events).forEach((e) => {
      el[e] = events[e];
    });
    const children = virtualEl.getChildren();
    children.forEach((child) => {
      el.append(renderElement(child));
    });
    return el;
  };

  root.replaceWith(renderElement(virtualRoot));
};
