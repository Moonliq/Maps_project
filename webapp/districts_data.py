import xlrd
import csv

loc = ("regions.xlsx")

wb = xlrd.open_workbook(loc)
sheet = wb.sheet_by_index(0)

region_list = {}

def type_of_region():
    for region in range(sheet.nrows):
        region_var = sheet.cell(region,1).value
        type_color = sheet.cell(region,4).value
        region_list[region_var] = type_color
    region_list.pop('Region code')
    return region_list

# def region_borders():
#     for region in range(sheet.nrows):
#         region_var = sheet.cell(region,1).value
#         region_list[region_var] = '#48C9B0'
#     region_list.pop('Region code')
#     return region_list

def region_borders():
    with open('data-20141231.csv', 'r', encoding='utf-8') as f:
        fields = ["OKTMO_code", "OKTMO_description", "population", "men", "women", "urban_population", "urban_men_population", "urban_women_population", "rural_population", "rural_men_population", "rural_women_population"]
        reader = csv.DictReader(f, fields, delimiter=',')
        percentage = []
        regions_perc = {}
        bu = 0
        for row in reader:
            if row["OKTMO_description"].split(' ')[0] == 'Муниципальные':
                percentage = round((int(row["men"]) / int(row["population"]) * 100), 2)
                oblast = row["OKTMO_description"]
                if percentage < 43:
                    ccode = 'A70101'
                elif 43 <= percentage < 44:
                    ccode = 'FB0101'
                elif 44 <= percentage < 45:
                    ccode = 'F57F01'
                elif 45 <= percentage < 46:
                    ccode = 'FDF449'
                elif 46 <= percentage < 47:
                    ccode = 'B3F65D'
                elif 47 <= percentage < 49:
                    ccode = '02FB39'
                else:
                    ccode = '01FCA8'
                for region in range(sheet.nrows):
                    if sheet.cell(region,5).value in row["OKTMO_description"]:
                        region_list[sheet.cell(region,1).value] = ccode
                    else:
                        pass
            else:
                pass

    region_list.pop('Region code')
    return region_list
