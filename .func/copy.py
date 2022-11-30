import csv
import shutil


with open('src/data/suburbs.csv', newline='') as subs:
    reader = csv.reader(subs, delimiter=' ', quotechar="|")
    for line in reader:
        print(''.join(line))
        shutil.copy('src/images/southernmilk.mp4',
                    'src/images/suburbs/' + ''.join(line) + '.mp4')
