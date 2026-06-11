---
icon: pen-to-square
date: 2025-12-11
category:
  - Windows
  - Linux
tag:
  - Windows
  - Linux
  - WSL
  - Kali
order: 1
star: true
---

# Windows 10 安装 Kali WSL

Kali 自带很多安全测试工具，如果不想占用 C 盘空间，可以把 WSL 发行版迁移到 E 盘。本文记录安装 Kali WSL、导出备份、重新导入到指定目录，以及设置默认登录用户的过程。

<!-- more -->

## 准备工作
Windows 系统需要先开启 WSL。

如果之前装过 Kali WSL，可以使用以下命令卸载旧实例：

```powershell
wsl --unregister kali-linux
```

## 操作步骤
1. 安装 Kali，并根据提示创建用户密码，进入系统。

```powershell
wsl --install -d kali-linux
```

![](https://picgo.checo.cc/20251211022031.png)

2. 打包当前 Kali 系统，暂存到中间位置。

```powershell
wsl --export kali-linux D:\kali-backup.tar
```

![](https://picgo.checo.cc/20251211022321.png)

3. 删除当前 Kali 系统。

```powershell
wsl --unregister kali-linux
```

![](https://picgo.checo.cc/20251211022909.png)

4. 使用第 2 步导出的包，在 E 盘导入新的 Kali 系统。

```powershell
wsl --import kali-linux E:\WSL\Kali D:\kali-backup.tar
```

![](https://picgo.checo.cc/20251211022548.png)

5. 登录 Kali 系统。

```powershell
wsl -d kali-linux
```

此时会默认以 root 身份登录。

![](https://picgo.checo.cc/20251215005129.png)

6. 创建配置文件，指定 WSL 默认使用 `checo` 用户登录。

```bash
echo -e "[user]\ndefault=checo" > /etc/wsl.conf
```

![](https://picgo.checo.cc/20251215005258.png)

7. 退出并重启 WSL。

```powershell
wsl --terminate kali-linux
```

```powershell
wsl -d kali-linux
```

![](https://picgo.checo.cc/20251215005514.png)

重新进入后，提示符变成 `$`，用户名也变成 `checo`。

## 总结
这样可以把 Kali WSL 放到非系统盘，减少 C 盘占用。后续如果继续写，可以再补一篇 Kali 常用工具和 WSL 网络配置。
