# Есть две коробки, первая размером A1×B1×C1, вторая размером A2×B2×C2.
# Определите, можно ли разместить одну из этих коробок внутри другой, при условии, что поворачивать коробки можно только на 90 градусов вокруг ребер.
#
# Формат входных данных
# Программа получает на вход числа A1, B1, C1, A2, B2, C2.
#
# Формат выходных данных
# Программа должна вывести одну из следующих строчек: Boxes are equal, если коробки одинаковые,
# The first box is smaller than the second one, если первая коробка может быть положена во вторую,
# The first box is larger than the second one, если вторая коробка может быть положена в первую,
# Boxes are incomparable, во всех остальных случаях.

A1, B1, C1, A2, B2, C2 = int(input()), int(input()), int(input()), int(input ()), int(input()), int(input())
V1 = A1 * B1 * C1
V2 = A2 * B2 * C2
if V1 == V2:
    print('Boxes are equal')
elif V2 > V1:
    print('The first box is smaller than the second one')
elif V1 > V2:
    print('The first box is larger than the second one')
else:
    print('Boxes are incomparable')
