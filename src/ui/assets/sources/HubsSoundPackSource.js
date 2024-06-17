import AssetManifestSource from "../AssetManifestSource";

export default class HubsSoundPackSource extends AssetManifestSource {
  constructor(editor) {
    super(editor, "Hubs Sound Pack", "https://belivvr.github.io/files/xrcloud/spoke/hubs-sound-pack/asset-manifest.json");
  }
}
