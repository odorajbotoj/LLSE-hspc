ll.registerPlugin("LLSE-hspc", "Hack SPC", [0, 0, 1, Version.Dev], {
    "Author": "odorajbotoj"
});
mc.listen("onServerStarted", () => {
    const cmd = mc.newCommand("hspc", "Hack SPC", PermType.Any);
    cmd.overload([]);
    cmd.setCallback((_cmd, ori, out, _res) => {
        if (ori.player == null) {
            out.error("命令只能被玩家执行");
            return;
        }
        var sp = mc.getPlayer(ori.player.name + "-sp");
        if (sp == null) {
            out.error("无法获取spc假人对象");
            return;
        }
        ori.player.sendSimpleForm("HSPC","Hack SPC",[
            `看向灵魂`,                                 // 0
            `攻击`,                                     // 1
            `跳跃`,                                     // 2
            `破坏`,                                     // 3
            `${Format.Red}停止破坏${Format.Clear}`,     // 4
            `交互`,                                     // 5
            `${Format.Red}停止交互${Format.Clear}`,     // 6
            `使用物品`,                                 // 7
            `${Format.Red}停止使用物品${Format.Clear}`  // 8
        ],[``, ``, ``, ``, ``, ``, ``, ``, ``],(pl, id) => {
            switch (id) {
                case 0:
                    sp.simulateLookAt(pl.pos);
                    break;
                case 1:
                    sp.simulateAttack();
                    break;
                case 2:
                    sp.simulateJump();
                    break;
                case 3:
                    sp.simulateDestroy();
                    break;
                case 4:
                    sp.simulateStopDestroyingBlock();
                    break;
                case 5:
                    sp.simulateInteract();
                    break;
                case 6:
                    sp.simulateStopInteracting()
                    break;
                case 7:
                    sp.simulateUseItem();
                    break;
                case 8:
                    sp.simulateStopUsingItem();
                    break;
            }
        })
    });
    cmd.setup();
});