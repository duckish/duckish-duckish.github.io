import random
from PIL import Image
from numpy import asarray

import os


int_list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
         '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
         '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
         '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
         '41', '42', '43', '44', '45', '46', '47', '48', '49', '50']

animals = ['cat', 'dog', 'mouse', 'parrot', 'snake', 'car', 'moto', 'goat', 'horse', 'donkey',
           'flower', 'house', 'dog', 'tree', 'bicycle', 'ufo', 'baseball', 'football', 'basketball',
           'hockey']

ones = ['Arizona Diamondbacks', 'Atlanta Braves', 'Baltimore Orioles',
        'Boston Red Sox', 'Chicago Cubs', 'Chicago White Sox',
        'Cincinnati Reds', 'Cleveland Guardians', 'Colorado Rockies',
        'Detroit Tigers', 'Houston Astros', 'Kansas City Royals',
        'Los Angeles Angels', 'Los Angeles Dodgers', 'Miami Marlins',
        'Milwaukee Brewers', 'Minnesota Twins', 'New York Mets',
        'New York Yankees', 'Oakland Athletics', 'Philadelphia Phillies',
        'Pittsburgh Pirates', 'San Diego Padres', 'San Francisco Giants',
        'Seattle Mariners', 'St. Louis Cardinals', 'Tampa Bay Rays',
        'Texas Rangers', 'Toronto Blue Jays', 'Washington Nationals']

twos = ['Diamondbacks', 'Braves', 'Orioles', 'Red Sox', 'Cubs',
        'White Sox', 'Reds', 'Guardians', 'Rockies', 'Tigers',
        'Astros', 'Royals', 'Angels', 'Dodgers', 'Marlins',
        'Brewers', 'Twins', 'Mets', 'Yankees', 'Athletics',
        'Phillies', 'Pirates', 'Padres', 'Giants', 'Mariners',
        'Cardinals', 'Rays', 'Rangers', 'Blue Jays', 'Nationals']

list_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
          11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
          41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

list_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
          11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
          41, 42, 43, 44, 45, 46, 47, 48, 49, 50]


# get the current working directory
pwd = os.getcwd()

def gen_ran():
    ani = random.choice(animals)
    ran_int = random.choice(int_list)
    img_path = pwd + f'/dataset/{ani}/Image_{ran_int}.jpg'
    img = Image.open(img_path)
    numpydata = asarray(img)

    print(img_path)
    print(numpydata.sum())
    return numpydata.sum()


def main():

    total_num = gen_ran()
    to_use = ''
    if(total_num % 2) == 0:
        print("total_num % 2", total_num % 2)
        to_use = list_1
    else:
        to_use = list_2

    print(to_use)


    list_50 = []
    for it in range(50):
        if(to_use[it] % 2) == 0:
            list_50.append(random.choice(ones))
        else:
            list_50.append(random.choice(twos))


    print(list_50)

    for i in range(49):
        total_num = gen_ran()
        if(total_num % 2) == 0:
            list_50.pop(0)
            print(list_50)
        else:
            list_50.pop(-1)
            print(list_50)
        print(total_num)




if __name__== "__main__":
    main()
