#!/usr/bin/env node

import {
  echo
} from "zx";
import {
  myCustomArgv,
  readHelp
} from "./helper.js";
import {
  deleteEmptyTargets,
  getAllIntegrationsInOrg,
  getOrgs,
  getIssuesCount,
  updateSnykCode,
  deleteTargetsCreatedAfter
} from "./api.js";

const cliVersion = "6.0.0";


(async () => {
  if (myCustomArgv.help || myCustomArgv.h) {
    readHelp();
  } else if (myCustomArgv.get_all_orgs_group) {
    getOrgs();
  } else if (myCustomArgv.get_all_integrations_org) {
    getAllIntegrationsInOrg();
  } else if (myCustomArgv.version || myCustomArgv.v) {
    echo(`${cliVersion}`);
  } else if (myCustomArgv.delete_empty_targets) {
    deleteEmptyTargets();
  } else if (myCustomArgv.update_snyk_code_orgs) {
    updateSnykCode();
  } else if (myCustomArgv.get_all_org_issues) {
    getIssuesCount();
  } else if (myCustomArgv.delete_targets_created_after) {
    deleteTargetsCreatedAfter();
  } else {
    echo(`invalid command!`);
  }
})();