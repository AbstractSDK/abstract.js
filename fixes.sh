#!/bin/sh

sed -i '' -e "s/AssetInfoBaseFor_Addr/AssetInfoBase_for_Addr/g" types/*
sed -i '' -e "s/AssetBaseFor_Addr/AssetInfoBase_for_Addr/g" types/*
# sed -i '' -e ":a;N;$!ba;s/[k: string]: unknown;\n//g" types/*
# perl -p -e 's/[k: string]: unknown;\n/ /' types/*
# grep -v '\[k: string]: unknown;' types/
sed -i '' '/\[k: string\]: unknown;/d' types/*
