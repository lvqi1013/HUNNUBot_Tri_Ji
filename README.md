# HNNU Robotics Learning Portal

湖南师范大学机器人校队学习资料网页。当前主入口是 `promis/index.html`，根目录 `index.html` 已设置为跳转入口，便于直接部署到 GitHub Pages。

## 项目结构

```text
.
├── index.html                          # GitHub Pages 默认入口，跳转到新版页面
├── README.md                           # 项目说明文档
├── assets/
│   ├── promise-docs.css                # 资料子页面的新版浅色风格覆盖样式
│   └── rig-inspired.css                # 旧版/通用资料页基础样式
├── docs/
│   ├── Linux/
│   │   └── linux_commands_tutorial.html
│   ├── code/
│   │   └── oop.html
│   └── env/
│       ├── environment_configuration.html
│       └── ros2_configuration.html
├── promis/
    ├── index.html                      # 当前新版主页
    ├── styles.css                      # 新版主页样式
    ├── script.js                       # 页面交互、滚动动画、代码效果
    └── assets/
        ├── hnnu-emblem.png             # 湖南师范大学校徽，导航栏使用
        ├── hnnu-emblem-source.ai       # 校徽 AI 源文件副本
        └── protocol-badge.svg          # 首页视觉装饰资源

```

发布到 GitHub 时，建议提交网页运行必需文件：`index.html`、`README.md`、`assets/`、`docs/`、`promis/`。压缩包、日志文件和本地工具目录可以不提交。

## 页面内容

- 新版主页：机器人校队学习资料入口、训练路径、RoboCup 方向说明和外部链接。
- 资料页面：
  - WSL2 安装与配置
  - ROS2 Jazzy 安装教程
  - Linux 入门命令
  - 面向对象编程入门
- 导航栏使用湖南师范大学校徽，白色圆形底。
- 资料页的返回入口统一指向新版资料主页，不再跳转旧版主页。

## 主要特性

- 纯静态网页，无需构建工具。
- 支持 GitHub Pages 直接托管。
- 首页顶部导航、响应式布局、滚动 reveal 动效。
- 首页流动文字为连续循环，不会到头刷新。
- 资料页代码块支持复制按钮。
- 资料页已统一为新版浅色网格风格。

## 本地预览

在项目根目录运行：

```bash
python -m http.server 8000
```

然后打开：

```text
http://127.0.0.1:8000/
```

根目录入口会自动跳转到：

```text
http://127.0.0.1:8000/promis/index.html
```

## GitHub Pages 发布

1. 将项目文件提交到 GitHub 仓库。
2. 进入仓库 `Settings`。
3. 打开 `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 部署完成。

部署完成后，访问仓库的 Pages 地址即可进入新版主页。

## 资源说明

`promis/assets/hnnu-emblem.png` 由湖南师范大学校徽 AI 源文件导出，用于导航栏展示。若仓库公开发布，请确认校徽及学校标识的使用权限。
