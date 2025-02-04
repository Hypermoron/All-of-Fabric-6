
const DELETED_ITEMS = [
    'croptosis:fertilized_sand',
    'croptosis:fertilized_farmland',
    'croptosis:fertilized_dirt',
    'croptosis:potash_ore',
    'croptosis:apatite_ore',
    'croptosis:deepslate_apatite_ore',
    'croptosis:potash_block',
    'croptosis:apatite_block',
    'croptosis:feather_meal',
    'croptosis:rotten_pile',
    'croptosis:apatite',
    'croptosis:potash',
    'croptosis:potash_pieces',
    'nethersdelight:iron_machete',
    'nethersdelight:diamond_machete',
    'nethersdelight:netherite_machete',
    'nethersdelight:golden_machete',
    'adventurez:raw_venison',
    'adventurez:cooked_venison',
    'fishofthieves:earthworms',
    'fishofthieves:grubs',
    'blockus:oak_barrel',
    'blockus:birch_barrel',
    'blockus:jungle_barrel',
    'blockus:acacia_barrel',
    'blockus:dark_oak_barrel',
    'blockus:crimson_barrel',
    'blockus:warped_barrel',
    'blockus:white_oak_barrel',
    'blockus:bamboo_barrel',
    'blockus:charred_barrel',
    'compressed:soul_sand_i',
    'mysticalagriculture:aluminum_seeds',
    'mysticalagriculture:chromium_seeds',
    'mysticalagriculture:electrum_seeds',
    'mysticalagriculture:invar_seeds',
    'mysticalagriculture:iridium_seeds',
    'mysticalagriculture:platinum_seeds',
    'mysticalagriculture:steel_seeds',
    'mysticalagriculture:titanium_seeds',
    'mysticalagriculture:tungsten_seeds',
    'mysticalagriculture:aluminum_essence',
    'mysticalagriculture:chromium_essence',
    'mysticalagriculture:electrum_essence',
    'mysticalagriculture:invar_essence',
    'mysticalagriculture:iridium_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:steel_essence',
    'mysticalagriculture:titanium_essence',
    'mysticalagriculture:tungsten_essence',
    'bakery:strawberry_seeds',
    'create_jetpack:jetpack_placeable',
    'ironchests:gold_barrel',
    'ironchests:diamond_barrel',
    'ironchests:copper_barrel',
    'ironchests:crystal_barrel',
    'ironchests:obsidian_barrel',
    'ironchests:netherite_barrel',
    'ironchests:iron_barrel',
    'spectrumjetpacks:ink_charger',
    'compressed:charcoal_block',
    'compressed:charcoal_block_i',
    'compressed:charcoal_block_ii',
    'compressed:charcoal_block_iii',
    'compressed:charcoal_block_iv',
    'compressed:coal_block',
    'compressed:coal_block_i',
    'compressed:coal_block_ii',
    'compressed:coal_block_iii',
    'compressed:coal_block_iv'
];
REIEvents.hide('item', (event) => {
    DELETED_ITEMS.forEach(id => event.hide(id));
});
