from PIL import Image
from numpy import asarray


import os

# get the current working directory
pwd = os.getcwd()


int_list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
         '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
         '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
         '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
         '41', '42', '43', '44', '45', '46', '47', '48', '49', '50']

animals = ['cat', 'dog', 'mouse', 'parrot', 'snake', 'car', 'moto', 'goat', 'horse', 'donkey',
           'flower', 'house', 'dog', 'tree', 'bicycle', 'ufo', 'baseball', 'football', 'basketball',
           'hockey']

# load the image and convert into
# numpy array

to_write = ""
for it in int_list:
    for ani in animals:
        img_path = pwd + f'/dataset/{ani}/Image_{it}.jpg'
        img = Image.open(img_path)
        numpydata = asarray(img)

        to_write = to_write + f"""'{ani}{it}':'{numpydata.sum()}',"""

# data

print(to_write)
