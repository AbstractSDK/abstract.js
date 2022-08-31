#!/bin/sh

sed -i '' -e "s/AssetInfoBaseFor_Addr/AssetInfoBase_for_Addr/g" generated/*
sed -i '' -e "s/AssetBaseFor_Addr/AssetInfoBase_for_Addr/g" generated/*
sed -i '' -e "s/AssetInfoBaseFor_String/AssetInfoBase_for_String/g" generated/*
sed -i '' -e "s/AssetBaseFor_String/AssetInfoBase_for_String/g" generated/*
sed -i '' '/\[k: string\]: unknown;/d' generated/*

# sed -i '' -e "s/AssetInfoBaseFor_Addr/AssetInfoBase_for_Addr/g" src/contracts/*
# sed -i '' -e "s/AssetBaseFor_Addr/AssetInfoBase_for_Addr/g" src/contracts/*
# sed -i '' -e "s/AssetInfoBaseFor_String/AssetInfoBase_for_String/g" src/contracts/*
# sed -i '' -e "s/AssetBaseFor_String/AssetInfoBase_for_String/g" src/contracts/*
sed -i '' '/\[k: string\]: unknown;/d' src/contracts/*
sed -i '' '/\[k: string\]: unknown;/d' src/types/*
sed -i '' '/\[k: string\]: unknown;/d' src/modules/*
