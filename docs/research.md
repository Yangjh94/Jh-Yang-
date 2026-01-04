# 超高层建筑风致响应分析笔记

## 1. 理论背景

高层建筑在风荷载作用下会产生顺风向、横风向和扭转方向的振动。对于超高层建筑，横风向涡激共振往往是控制设计的关键因素。

### 1.1 气动阻尼
气动阻尼比 $\xi_a$ 是评估风致响应的重要参数...

## 2. OpenSEESPy 建模片段

以下是一个简单的悬臂柱建模示例：

```python
import openseespy.opensees as ops

ops.wipe()
ops.model('basic', '-ndm', 2, '-ndf', 3)

# 定义节点
ops.node(1, 0.0, 0.0)
ops.node(2, 0.0, 10.0)

# 定义边界条件
ops.fix(1, 1, 1, 1)
```

## 3. 附件下载

- [详细推导过程 (PDF)](/docs/files/derivation.pdf)
- [汇报演示文稿 (PPT)](/docs/files/presentation.pptx)
