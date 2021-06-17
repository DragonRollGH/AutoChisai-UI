cron = '9 9 * * * cd Chisai; python3 Chisai.py'

import random

for d in range(1, 32):
    h = 8
    m = random.randint(0, 59)
    print('{:2} {} {:2} * * cd Chisai; python3 Chisai.py'.format(m,h,d))

"""
28 8  1 * * cd Chisai; python3 Chisai.py
37 8  2 * * cd Chisai; python3 Chisai.py
21 8  3 * * cd Chisai; python3 Chisai.py
45 8  4 * * cd Chisai; python3 Chisai.py
31 8  5 * * cd Chisai; python3 Chisai.py
 5 8  6 * * cd Chisai; python3 Chisai.py
21 8  7 * * cd Chisai; python3 Chisai.py
41 8  8 * * cd Chisai; python3 Chisai.py
48 8  9 * * cd Chisai; python3 Chisai.py
51 8 10 * * cd Chisai; python3 Chisai.py
19 8 11 * * cd Chisai; python3 Chisai.py
 6 8 12 * * cd Chisai; python3 Chisai.py
34 8 13 * * cd Chisai; python3 Chisai.py
 7 8 14 * * cd Chisai; python3 Chisai.py
51 8 15 * * cd Chisai; python3 Chisai.py
 2 8 16 * * cd Chisai; python3 Chisai.py
46 8 17 * * cd Chisai; python3 Chisai.py
55 8 18 * * cd Chisai; python3 Chisai.py
21 8 19 * * cd Chisai; python3 Chisai.py
41 8 20 * * cd Chisai; python3 Chisai.py
34 8 21 * * cd Chisai; python3 Chisai.py
39 8 22 * * cd Chisai; python3 Chisai.py
37 8 23 * * cd Chisai; python3 Chisai.py
35 8 24 * * cd Chisai; python3 Chisai.py
 6 8 25 * * cd Chisai; python3 Chisai.py
13 8 26 * * cd Chisai; python3 Chisai.py
51 8 27 * * cd Chisai; python3 Chisai.py
16 8 28 * * cd Chisai; python3 Chisai.py
54 8 29 * * cd Chisai; python3 Chisai.py
 9 8 30 * * cd Chisai; python3 Chisai.py
23 8 31 * * cd Chisai; python3 Chisai.py
"""