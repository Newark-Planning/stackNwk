import arcpy
import os

dirOfJSON = 'C:/Users/nterw/angular-NWK/stackNwk/src/assets/data/parcels'

outputDIrectory = 'C:/Users/nterw/angular-NWK/stackNwk/src/assets/data'

arcpy.env.workspace = dirOfJSON

for f in arcpy.ListFiles('*.shp'):
    j = os.path.join(dirOfJSON, f)
    outputJson = os.path.join(
        outputDIrectory, os.path.splitext(f)[0] + '.geojson')
    print("Processing : {}".format(outputJson))
    arcpy.FeaturesToJSON_conversion(
        j, outputJson, True, False, False, True, True)
