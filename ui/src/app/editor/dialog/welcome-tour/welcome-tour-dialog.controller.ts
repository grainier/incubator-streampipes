/*
 * Copyright 2019 FZI Forschungszentrum Informatik
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

export class WelcomeTourDialogController {

    $mdDialog: any;
    ShepherdService: any;
    user: any;
    RestApi: any;

    constructor($mdDialog, RestApi, ShepherdService, user) {
        this.$mdDialog = $mdDialog;
        this.RestApi = RestApi;
        this.ShepherdService = ShepherdService;
        this.user = user;
    }

    startCreatePipelineTour() {
        this.$mdDialog.hide();
        this.ShepherdService.startCreatePipelineTour();
    }

    hideTourForever() {
        this.user.hideTutorial = true;
        this.RestApi.updateUserDetails(this.user).then(data => {
            this.$mdDialog.hide();
        });
    }

    hide() {
        this.$mdDialog.hide();
    };

    cancel() {
        this.$mdDialog.cancel();
    };
}

WelcomeTourDialogController.$inject = ['$mdDialog', 'RestApi', 'ShepherdService', 'user'];