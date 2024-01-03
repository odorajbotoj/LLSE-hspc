ll.registerPlugin("LLSE-hspc", "Hack SPC", [0, 0, 2, Version.Release], {
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
        ori.player.sendSimpleForm("HSPC","Hack SPC v0.0.2",[
            `看向灵魂`,                                 // 0
            `攻击`,                                     // 1
            `跳跃`,                                     // 2
            `潜行`,                                     // 3
            `${Format.Red}停止潜行${Format.Clear}`,     // 4
            `破坏`,                                     // 5
            `${Format.Red}停止破坏${Format.Clear}`,     // 6
            `交互`,                                     // 7
            `${Format.Red}停止交互${Format.Clear}`,     // 8
            `使用物品`,                                 // 9
            `${Format.Red}停止使用物品${Format.Clear}`  // 10
        ],[``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``],(pl, id) => {
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
                    sp.simulateSneak();
                    break;
                case 4:
                    sp.simulateStopSneaking()
                    break;
                case 5:
                    sp.simulateDestroy();
                    break;
                case 6:
                    sp.simulateStopDestroyingBlock();
                    break;
                case 7:
                    sp.simulateInteract();
                    break;
                case 8:
                    sp.simulateStopInteracting()
                    break;
                case 9:
                    sp.simulateUseItem();
                    break;
                case 10:
                    sp.simulateStopUsingItem();
                    break;
            }
        })
    });
    cmd.setup();
});