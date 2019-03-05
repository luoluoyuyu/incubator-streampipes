/*
Copyright 2019 FZI Forschungszentrum Informatik

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package org.streampipes.sdk.builder.adapter;

import org.streampipes.model.connect.grounding.ProtocolDescription;
import org.streampipes.sdk.builder.AbstractConfigurablePipelineElementBuilder;
import org.streampipes.sdk.helpers.AdapterSourceType;

public class ProtocolDescriptionBuilder extends
        AbstractConfigurablePipelineElementBuilder<ProtocolDescriptionBuilder, ProtocolDescription> {

  protected ProtocolDescriptionBuilder(String appId, String label, String description) {
    super(appId, label, description, new ProtocolDescription());
  }

  /**
   * Creates a new protocol description using the builder pattern.
   * @param id A unique identifier of the new element, e.g., com.mycompany.sink.mynewdatasink
   * @param label A human-readable name of the element. Will later be shown as the element name in the StreamPipes UI.
   * @param description A human-readable description of the element.
   */
  public static ProtocolDescriptionBuilder create(String id, String label, String description) {
    return new ProtocolDescriptionBuilder(id, label, description);
  }

  public ProtocolDescriptionBuilder sourceType(AdapterSourceType sourceType) {
    this.elementDescription.setSourceType(sourceType.toString());
    return this;
  }

  @Override
  protected ProtocolDescriptionBuilder me() {
    return this;
  }

  @Override
  protected void prepareBuild() {
    this.elementDescription.setConfig(getStaticProperties());
  }
}