import { Instance, CSPlayerPawn } from "cs_script/point_script";

Instance.OnScriptInput("StripKnife", (ctx) => {
	let pawn = ctx.activator;
	if (!(pawn instanceof CSPlayerPawn)) return;
	let knife = pawn.FindWeaponBySlot(2);
	pawn.DestroyWeapon(knife);
});
