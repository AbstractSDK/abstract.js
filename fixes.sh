#!/bin/sh

sed -i '' -e "s/AssetInfoBaseFor_Addr/AssetInfoBase_for_Addr/g" types/*
sed -i '' -e "s/AssetBaseFor_Addr/AssetInfoBase_for_Addr/g" types/*
sed -i '' '/\[k: string\]: unknown;/d' types/*
