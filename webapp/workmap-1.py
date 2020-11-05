import csv
import xlrd
import collections
from collections import Counter

loc = ("regions.xlsx")

wb = xlrd.open_workbook(loc)
sheet = wb.sheet_by_index(0)

with open('data-20141231.csv', 'r', encoding='utf-8') as f:
    fields = ["OKTMO_code", "OKTMO_description", "population", "men", "women", "urban_population", "urban_men_population", "urban_women_population", "rural_population", "rural_men_population", "rural_women_population"]
    reader = csv.DictReader(f, fields, delimiter=',')
    percentage = []
    regions_perc = {}
    bu = 0
    for row in reader:
        if row["OKTMO_description"].split(' ')[0] == 'Муниципальные':
            percentage = round((int(row["men"]) / int(row["population"]) * 100), 2)
            # print(f'В {row["OKTMO_description"].split(" ")[2]} мужиков {percentage}%')
            # oblast = row["OKTMO_description"].split(" ")[2:]
            oblast = row["OKTMO_description"]
            # regions_perc[oblast] = percentage

            if percentage < 40:
                ccode = 'A70101'
            elif 40 <= percentage < 42:
                ccode = 'FB0101'
            elif 42 <= percentage < 44:
                ccode = 'F57F01'
            elif 44 <= percentage < 46:
                ccode = 'FDF449'
            elif 46 <= percentage < 48:
                ccode = 'B3F65D'
            elif 48 <= percentage < 50:
                ccode = '02FB39'
            else:
                ccode = '01FCA8'
            
            for region in range(sheet.nrows):
                if sheet.cell(region,5).value in row["OKTMO_description"]:
                    # print(sheet.cell(region,5).value)
                    regions_perc[sheet.cell(region,1).value] = ccode
                else:
                    pass
            # print(bu)        
                # region_var = sheet.cell(region,1).value
                # type_color = sheet.cell(region,4).value

            # regions_perc[oblast] = ccode

            # print(regions_perc)
            # bu = ""
        #     for el in oblast:
        #         # if ( 'Республ' in el or 'област' in el or 'края' in el or 'автоном' in el or 'округ' in el or 'город' in el):
        #         if el == '' or '(' in el or 'Республ' in el or 'Россий' in el or 'Федерац' in el or el[0] == '-' or el[0].islower(): 
        #             pass
        #         else:
        #             bu +=str(el) + " "
        #     print(f'В области {el} мужиков {percentage}%')
        else:
            pass
        # population = row["population"]
        # mens = row["men"]
        # percentage = int(population) / int(mens)
        # print(f'В области {bu} мужиков {row["men"]}')
        # print(row["population"])
#     counter = Counter(streets_total)
regions_perc.pop('Region code')
print(regions_perc)