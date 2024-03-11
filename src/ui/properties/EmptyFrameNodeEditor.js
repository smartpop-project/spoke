import React from "react";
import PropTypes from "prop-types";
import NodeEditor from "./NodeEditor";
import { ObjectGroup } from "styled-icons/fa-solid/ObjectGroup";
import InputGroup from "../inputs/InputGroup";
import SelectInput from "../inputs/SelectInput";
import useSetPropertySelected from "./useSetPropertySelected";
import { MediaType } from "../../editor/nodes/MediaFrameNode";

const mediaTypeOptions = [
  { label: "All Media", value: MediaType.ALL },
];

export default function EmptyFrameNodeEditor(props) {
  const { node, editor } = props;
  const onChangeMediaType = useSetPropertySelected(editor, "mediaType");
  return (
    <NodeEditor description={EmptyFrameNodeEditor.description} {...props}>
      <InputGroup name="Media Types" info="Limit what type of media this frame will capture">
        <SelectInput options={mediaTypeOptions} value={node.mediaType} onChange={onChangeMediaType} />
      </InputGroup>
    </NodeEditor>
  );
}

EmptyFrameNodeEditor.iconComponent = ObjectGroup;
EmptyFrameNodeEditor.description = "A frame to capture media objects.\n";

EmptyFrameNodeEditor.propTypes = {
  editor: PropTypes.object,
  node: PropTypes.object
};
