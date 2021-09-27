# https://adventofcode.com/2020/day/1

lines = [
'1721',
'979',
'366',
'299',
'675',
'1456',
]


def load_data(fileName):
    global lines
    with open(fileName, "r") as input_data:
        lines = input_data.readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].strip()


def myHelperFunction():
    global lines
    pass

def problemOne():
    global lines
    # print(lines)

    for a in lines:
        for b in lines:
            # print(int(a) +int(b)) 
            x = int(a)
            y = int(b)
            if 2020 == x + y:
                print(x,y,x+y,x*y)
                return x*y

def problemTwo():
    pass

if __name__ == "__main__":
    load_data("day1-input.txt")
    resultOne = problemOne()
    print(resultOne)
    # problemTwo()
