export const createEl = (tag, parent = virtualRoot, setInput, setEvents) => {
  //creates virtual element with methods to safely manipulate data while updating DOM automatically

  let elementObject = new Object();

  const el = document.createElement(tag);
  elementObject.el = el;

  let events = {};
  let children = [];

  elementObject.setEl = (input, setEvents) => {
    elementObject.el = el;
    children = [];
    if (setEvents) events = setEvents;
    if (typeof input === "function") elementObject.el = input(el);
    else elementObject.el.innerText = input;
    render();
  };

  elementObject.setEvent = (eventName, func) => {
    events[eventName] = func;
    render();
  };

  elementObject.getEvents = () => {
    return { ...events };
  };

  elementObject.removeEvent = (eventName) => {
    delete events[eventName];
  };

  elementObject._setChildren = (func) => {
    children = func(children);
  };

  elementObject.getChildren = () => {
    return [...children];
  };

  parent._setChildren((prevChildren) => {
    return [...prevChildren, elementObject];
  });

  if (setInput) elementObject.setEl(setInput, setEvents);

  render();

  return elementObject;
};

const createRoot = () => {
  //initialise root with similar methods as createEl to allow render() to recurse through both

  const rootObject = new Object();

  let children = [];

  rootObject._setChildren = (func) => {
    children = func(children);
  };

  rootObject.getEvents = () => {
    return {};
  };

  rootObject.getChildren = () => {
    return [...children];
  };

  rootObject.el = document.createElement("div");
  rootObject.el.id = "root";
  return rootObject;
};

const virtualRoot = createRoot();

const render = () => {
  //recursively append elements to root, attatching any event-listeners set in virtual element

  const root = document.getElementById("root");

  const renderElement = ({ ...virtualEl }) => {
    const el = virtualEl.el.cloneNode(true);
    const events = virtualEl.getEvents();

    const eventNames = Object.keys(events);
    eventNames.forEach((eventName) => {
      el[eventName] = events[eventName];
    });

    const children = virtualEl.getChildren();
    //recurse over children
    children.forEach((child) => {
      el.append(renderElement(child));
    });

    return el;
  };

  root.replaceWith(renderElement(virtualRoot));
};
