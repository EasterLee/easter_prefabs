import { Instance, CSPlayerPawn } from "cs_script/point_script";
Instance.OnScriptInput("GiveAmmo", (ctx) => {
    let pawn = ctx.activator;
    if (!(pawn instanceof CSPlayerPawn))
        return;
    let weapon = pawn.GetActiveWeapon();
    if (!weapon)
        return;
    Instance.EntFireAtTarget(weapon, "SetAmmoAmount", "999");
});
//# sourceMappingURL=ammo.js.map