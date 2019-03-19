import {DeploymentTypeController} from "./deployment-type.controller";
declare const require: any;

export let DeploymentTypeComponent = {
    template: './deployment-type.tmpl.html',
    bindings: {
        disabled : "<",
        deployment : "<",
    },
    controller: DeploymentTypeController,
    controllerAs: 'ctrl'
};