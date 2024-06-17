import KitSource from "../KitSource";
import { TransformPivot } from "../../../editor/controls/SpokeControls";

export default class ArchitectureKitSource extends KitSource {
  constructor(api) {
    super(
      api,
      "https://belivvr.github.io/files/xrcloud/spoke/ArchKit-belivvr-backup.gltf"
    );
    this.id = "architecture-kit";
    this.name = "Architecture Kit";
    this.transformPivot = TransformPivot.Selection;
    // Images take a while to load so we set a debounce timeout
    this.searchDebounceTimeout = 500;
  }
}
