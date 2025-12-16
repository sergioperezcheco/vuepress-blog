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
sticky: true
---

# Windows 10安装Kali WSL
众所周知，Kali有很多自带的渗透测试工具。今天心血来潮想要在WSL中安装一个并且迁移到E盘，避免占用所剩无几的C盘空间

## 准备工作
Windows系统需要开启WSL

如果之前有装过WSL，默认是Ubuntu，可以使用以下命令进行卸载
```
wsl --unregister kali-linux
```

## 操作步骤
1. 安装Kali，并根据提示创建用户密码，进入系统
```
wsl --install -d kali-linux
```
![](https://picgo.checo.cc/20251211022031.png)

2. 打包当前的Kali系统，暂存至中间位置
```
wsl --export kali-linux D:\kali-backup.tar
```
![](https://picgo.checo.cc/20251211022321.png)

3. 删除当前Kali系统
```
wsl --unregister kali-linux
```
![](https://picgo.checo.cc/20251211022909.png)

4. 使用第二部打的包在E盘中启动新的Kali系统
```
wsl --import kali-linux E:\WSL\Kali D:\kali-backup.tar
```
![](https://picgo.checo.cc/20251211022548.png)

5. 登录Kali系统
```
wsl -d kali-linux
```
会默认以root身份登录
![](https://picgo.checo.cc/20251215005129.png)

6. 创建文件告诉WSL默认用checo用户登录
```
echo -e "[user]\ndefault=checo" > /etc/wsl.conf
```
![](https://picgo.checo.cc/20251215005258.png)

7. 退出并重启WSL
```
wsl --terminate kali-linux
```
```
wsl -d kali-linux
```
![](https://picgo.checo.cc/20251215005514.png)
进来后的提示符变成了 $，且用户名是 checo

## 总结
之后可以出一期教程，研究如何使用Kali