# Шахматный слон ходит по диагонали. Даны две различные клетки шахматной доски, определите, может ли слон попасть
# с первой клетки на вторую одним ходом.
#
# Формат входных данных
# Программа получает на вход четыре числа от 1 до 8 каждое, задающие номер столбца и номер строки сначала для первой клетки,
# потом для второй клетки.
#
# Формат выходных данных
# Программа должна вывести YES, если из первой клетки ходом слона можно попасть во вторую или NO в противном случае.

x1, y1, x2, y2 = int(input()), int(input()), int(input()), int(input())
if (x1 - y1) == (x2 - y2) or (x1 + y1)  == (x2 + y2):
    print('YES')
else:
    print('NO')