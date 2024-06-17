import KitSource from "../KitSource";
import { TransformPivot } from "../../../editor/controls/SpokeControls";

export default class RockKitSource extends KitSource {
  constructor(api) {
    super(api, "https://belivvr.github.io/files/xrcloud/spoke/RocksKit_v2-belivvr-backup.gltf");
    this.id = "rock-kit";
    this.name = "Rock Kit";
    this.transformPivot = TransformPivot.Selection;
  }
}
