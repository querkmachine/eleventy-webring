export default class {
  data() {
    return {
      pagination: {
        data: "webring",
        size: 1,
        alias: "site",
      },
      permalink: (data) => `${data.site.id}/next/`,
    };
  }

  render(data) {
    const redirectTo = this.getSiblingSiteInRing(data.site.id, +1);
    return this.templateRedirect(redirectTo);
  }
}
