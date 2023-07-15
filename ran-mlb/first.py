import requests 
from bs4 import BeautifulSoup

r = requests.get("https://loteries.lotoquebec.com/en/lotteries/banco?date=2023-06-01#res")
soup = BeautifulSoup(r.content, "html.parser")

text_class = soup.find_all(class_="num")

print(text_class)

for i in text_class:
    print(i)