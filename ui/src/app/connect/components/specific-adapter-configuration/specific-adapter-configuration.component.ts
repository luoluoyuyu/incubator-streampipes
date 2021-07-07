/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdapterDescriptionUnion } from '../../../core-model/gen/streampipes-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'sp-specific-adapter-configuration',
  templateUrl: './specific-adapter-configuration.component.html',
  styleUrls: ['./specific-adapter-configuration.component.scss']
})
export class SpecificAdapterConfigurationComponent implements OnInit {

  /**
   * Adapter description the selected format is added to
   */
  @Input() adapterDescription: AdapterDescriptionUnion;

  /**
   * Cancels the adapter configuration process
   */
  @Output() removeSelectionEmitter: EventEmitter<boolean> = new EventEmitter();

  /**
   * Go to next configuration step when this is complete
   */
  @Output() clickNextEmitter: EventEmitter<MatStepper> = new EventEmitter();

  specificAdapterSettingsFormValid: boolean;

  specificAdapterForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // initialize form for validation
    this.specificAdapterForm = this._formBuilder.group({});
    this.specificAdapterForm.statusChanges.subscribe((status) => {
      this.specificAdapterSettingsFormValid = this.specificAdapterForm.valid;
    });
  }

  public removeSelection() {
    this.removeSelectionEmitter.emit();
  }

  public clickNext() {
    this.clickNextEmitter.emit();
  }
}
