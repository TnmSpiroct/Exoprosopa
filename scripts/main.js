const exoprosopa = Vars.mods.locateMod("exoprosopa").meta;

exoprosopa.displayName = Core.bundle.get("mod.exoprosopa.name");
exoprosopa.author = Core.bundle.get("mod.exoprosopa.author");
exoprosopa.description = Core.bundle.get("mod.exoprosopa.description");
exoprosopa.subtitle = Core.bundle.get("mod.exoprosopa.subtitle");

SaveFileReader.fallback.putAll(
  "09i-90-pipeline-incerinator", "09i-20-pipeline-incinerator", 
)

const Suzuran = extend(CoreBlock, "11k-00-core-suzuran-kit", {
    
});
const Apex = extend(CoreBlock, "11k-01-core-apex", {
    
});
const Empower = extend(CoreBlock, "11k-02-core-empower", {
    
});
const Apeirogon = extend(CoreBlock, "11k-03-core-apeirogon", {
    
});
const Crest = extend(CoreBlock, "11k-04-a-core-crest", {
    
});
const Boundless = extend(CoreBlock, "11k-04-b-core-boundless", {
    
});
const Ultimatum = extend(CoreBlock, "11k-04-c-core-ultimatum", {
    
});
const Clip = extend(StorageBlock, "11k-04-clip", {
    
});
const Hub = extend(StorageBlock, "11k-04-hub", {
    
});
const GroundRadar = extend(Radar, "11k-06-illuminator", {
    
});
const FloatingRadar = extend(Radar, "11k-07-buoy", {
    canPlaceOn(tile, team, rotation) {
        if (tile == null) return false;
        return tile.floor().isLiquid;
    }
});