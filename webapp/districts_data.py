import xlrd

loc = ("webapp/regions.xlsx")

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

def region_borders():
    for region in range(sheet.nrows):
        region_var = sheet.cell(region,1).value
        region_list[region_var] = '#48C9B0'
    region_list.pop('Region code')
    return region_list

def region_names():
    for region in range(sheet.nrows):
        region_var = sheet.cell(region,1).value
        region_name = sheet.cell(region,0).value
        region_list[region_var] = region_name
    region_list.pop('Region code')
    return region_list