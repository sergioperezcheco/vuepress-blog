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

# Installing Kali WSL on Windows 10

Kali comes with many security testing tools. If you don't want to take up C drive space, you can migrate the WSL distribution to the E drive. This article documents the process of installing Kali WSL, exporting a backup, reimporting to a specified directory, and setting the default login user.

<!-- more -->

## Prerequisites
Windows system needs WSL enabled first.

If you previously installed Kali WSL, you can uninstall the old instance with the following command:

```powershell
wsl --unregister kali-linux
```

## Procedure
1. Install Kali, create a user password as prompted, and enter the system.

```powershell
wsl --install -d kali-linux
```

![](https://picgo.checo.cc/20251211022031.png)

2. Package the current Kali system and save it to an intermediate location.

```powershell
wsl --export kali-linux D:\kali-backup.tar
```

![](https://picgo.checo.cc/20251211022321.png)

3. Delete the current Kali system.

```powershell
wsl --unregister kali-linux
```

![](https://picgo.checo.cc/20251211022909.png)

4. Import a new Kali system on the E drive using the package exported in step 2.

```powershell
wsl --import kali-linux E:\WSL\Kali D:\kali-backup.tar
```

![](https://picgo.checo.cc/20251211022548.png)

5. Log in to the Kali system.

```powershell
wsl -d kali-linux
```

At this point you'll be logged in as root by default.

![](https://picgo.checo.cc/20251215005129.png)

6. Create a configuration file to specify that WSL should log in with the `checo` user by default.

```bash
echo -e "[user]\ndefault=checo" > /etc/wsl.conf
```

![](https://picgo.checo.cc/20251215005258.png)

7. Exit and restart WSL.

```powershell
wsl --terminate kali-linux
```

```powershell
wsl -d kali-linux
```

![](https://picgo.checo.cc/20251215005514.png)

After re-entering, the prompt changes to `$` and the username becomes `checo`.

## Summary

This way you can put Kali WSL on a non-system drive, reducing C drive usage. If I continue writing later, I can add another article on Kali common tools and WSL network configuration.
