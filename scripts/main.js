const exoprosopa = Vars.mods.locateMod("exoprosopa").meta;

exoprosopa.displayName = Core.bundle.get("mod.exoprosopa.name");
exoprosopa.author = Core.bundle.get("mod.exoprosopa.author");
exoprosopa.description = Core.bundle.get("mod.exoprosopa.description");
exoprosopa.subtitle = Core.bundle.get("mod.exoprosopa.subtitle");

SaveFileReader.fallback.putAll(
  "09i-90-pipeline-incerinator", "09i-20-pipeline-incinerator", 
)
