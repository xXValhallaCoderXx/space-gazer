import mixpanel from "mixpanel-browser";
mixpanel.init("a39679c5ad9163a78ae1279f20caf8b3");

const envCheck = process.env.NODE_ENV === "production";

const actions = {
  identify: (id: any) => {
    if (envCheck) mixpanel.identify(id);
  },
  alias: (id: any) => {
    if (envCheck) mixpanel.alias(id);
  },
  track: (name: any, props: any) => {
    if (envCheck) mixpanel.track(name, props);
  },
  people: {
    set: (props: any) => {
      if (envCheck) mixpanel.people.set(props);
    }
  }
};

export let Mixpanel = actions;
