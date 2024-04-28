const payload_map =
    [
        {
            displayTitle: 'HEN 原版 v1.4（推荐 / 仅解锁运行PS4）',
            description: '支持 3.00 - 4.51 所有版本',
            fileName: 'ps5-kstuff.bin',
            author: 'sleirsgoevy',
            source: 'https://github.com/sleirsgoevy/ps4jb2/blob/ps5-403/ps5-kstuff.bin',
            version: '1.4'
        },
		{
            displayTitle: 'etaHEN v1.4b 定制简化版（解锁运行PS5/PS4）',
            description: '支持PS5游戏启动器itemzFlow，支持 3.00 - 4.51 所有版本',
            fileName: 'etaHEN.bin',
            author: 'LightningMods_, sleirsgoevy, ChendoChap, astrelsky, illusion',
            source: 'https://github.com/LightningMods/etaHEN',
            version: '1.4b'
        },
		{
            displayTitle: 'PS5debug（支持金手指）',
            description: '配合MultiTrainer II电脑客户端或内存调试工具',
            fileName: 'ps5debug.elf',
            author: 'SiSTR0, ctn123',
            source: 'https://github.com/GoldHEN/ps5debug',
            version: '1.0b1'
        },
		{
            displayTitle: 'FTP远程文件管理',
            description: '端口号1337，后台持续运行，配合FileZilla电脑客户端',
            fileName: 'ftps5-p.elf',
            author: 'SiSTR0, zecoxao, EchoStretch',
            source:'https://github.com/EchoStretch/FTPS5/releases',
            version: '1.4'
        },
		{
            displayTitle: 'elf插件加载器（会导致断电）',
            description: '端口号9021，后台持续运行，配合NetCat或安卓客户端',
            fileName: 'elfldr.elf',
            author: 'john-tornblom',
            source:'https://github.com/john-tornblom/ps5-payload-elfldr/releases',
            version: '0.5'
        },
		{
            displayTitle: '清除浏览器缓存',
            description: 'PS5无法双清，遇到缓存异常问题使用本功能清除后重新缓存',
            fileName: 'Browser_appCache_remove.elf',
            author: 'Storm21CH',
            source:'https://github.com/Storm21CH/PS5_Browser_appCache_remove/blob/main/Browser_appCache_remove.elf',
            version: '1.0fix'
        },
		// {
            // displayTitle: 'etaHEN 金手指版 v1.1beta（与自制应用冲突）',
            // description: '普通版+金手指功能。配合illusion的patches工具包进行使用',
            // fileName: 'etaHENwithcheats-1.1b.bin',
            // author: 'LightningMods_, sleirsgoevy, ChendoChap, astrelsky, illusion',
            // source: 'https://github.com/LightningMods/etaHEN',
            // version: '1.1'
        // },
		{
            displayTitle: '屏蔽系统更新（推荐）',
            description: '左上角显示“blocker enable”则为永久生效，建议配合路由器屏蔽',
            fileName: 'lock_unlock_updates.elf',
            author: 'logic-68',
            source: 'https://github.com/logic-68/Enable-Disable-UPD-PS5/releases',
            version: '1.0'
        }, 
        {
            displayTitle: '备份数据（解决游戏图标消失问题）',
            description: '索引、存档等数据，点击前插入exfat格式U盘，建议每月备份一次',
            fileName: 'Backup-db-PS5.elf',
            author: 'logic-68',
            source:'https://github.com/logic-68/Backup-DB-PS5',
            version: '0.5'
        },
		{
            displayTitle: '伪装高版本（支持4.03、4.50 / 需点击两次）',
            description: '用于安装运行高版本补丁，点击本插件前先点击运行HEN！',
            fileName: 'TO99999999_403_450.elf',
            author: 'Jaafar',
            source:'https://twitter.com/jaf51744',
            version: '1.1'
        },
		{
            displayTitle: '解锁部分正版游戏120/60帧率',
            description: 'v1.138 运行后可直接启动相应游戏（版本也需要对应）',
            fileName: 'spawner.elf',
            author: 'illusion0001, astrelsky',
            source: 'https://github.com/illusion0001/libhijacker/releases',
            // loader: 'libhijacker',
            version: '1.136'
        },
		{
            displayTitle: '查看版本信息',
            description: '内核、系统、SDK等版本信息',
            fileName: 'versions.elf',
            author: 'LM',
            source:'https://mega.nz/folder/4xA2ATTI#6lHvye1JUfhxRGvqOva8fw/folder/gwhWmRrB',
            version: '1.0'
        },
		{
            displayTitle: '查看系统状态',
            description: '温度、频率等系统信息',
            fileName: 'hwinfo-tornblom.elf',
            author: '匿名作者',
            source:'?',
            version: '1.0'
        }
		

    ];
