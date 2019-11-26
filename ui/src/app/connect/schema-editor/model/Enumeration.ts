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

import {Injectable} from '@angular/core';
import {RdfsClass} from '../../../platform-services/tsonld/RdfsClass';
import {RdfProperty} from '../../../platform-services/tsonld/RdfsProperty';
import {RdfId} from '../../../platform-services/tsonld/RdfId';

@Injectable()
@RdfsClass('http://schema.org/Enumeration')
export class Enumeration {

    private static serialVersionUID = -3994041794693686406;

    @RdfId
    public id: string;

    @RdfProperty('http://www.w3.org/2000/01/rdf-schema#label')
    public label: string;

    @RdfProperty('http://www.w3.org/2000/01/rdf-schema#description')
    public description: string;


   @RdfProperty('sp:hasRuntimeValue')
    public runtimeValues: Array<String>;


    constructor () {
        this.runtimeValues = new Array(0);
    }

    public copy(): Enumeration {
        const newEnumeration = new Enumeration();

        for (let ep of this.runtimeValues) {
            newEnumeration.runtimeValues.push(ep);
        }

        return newEnumeration;
    }

}