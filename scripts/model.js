import { Instance, CSPlayerPawn } from "cs_script/point_script";
Instance.OnScriptInput("SetModel", (ctx) => {
    let pawn = ctx.activator;
    if (!(pawn instanceof CSPlayerPawn))
        return;
    switch (pawn.GetTeamNumber()) {
        case 3: //CT
            pawn.SetModel("characters/models/ctm_diver/ctm_diver_varianta.vmdl");
            break;
        case 2: //T
            pawn.SetModel("characters/models/tm_leet/tm_leet_varianta.vmdl");
            break;
    }
});
//# sourceMappingURL=model.js.map