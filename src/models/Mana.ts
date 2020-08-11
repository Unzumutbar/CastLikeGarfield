export interface IMana {
  Order: number;
  Icon: string;
  Code: string;
  CMC: number;
}

const manaIcons: { [id: string]: IMana } = {};
manaIcons['x'] = {
  Order: -3,
  Icon: 'assets/mana/colorless/md-mana-cx.svg',
  Code: '{X}',
  CMC: 0,
};

manaIcons['y'] = {
  Order: -2,
  Icon: 'assets/mana/colorless/md-mana-cy.svg',
  Code: '{Y}',
  CMC: 0,
};

manaIcons['z'] = {
  Order: -1,
  Icon: 'assets/mana/colorless/md-mana-cz.svg',
  Code: '{Z}',
  CMC: 0,
};

manaIcons['zero'] = {
  Order: 0,
  Icon: 'assets/mana/colorless/md-mana-0.svg',
  Code: '{0}',
  CMC: 0,
};

manaIcons['one'] = {
  Order: 1,
  Icon: 'assets/mana/colorless/md-mana-1.svg',
  Code: '{1}',
  CMC: 1,
};

manaIcons['two'] = {
  Order: 2,
  Icon: 'assets/mana/colorless/md-mana-2.svg',
  Code: '{2}',
  CMC: 2,
};

manaIcons['three'] = {
  Order: 3,
  Icon: 'assets/mana/colorless/md-mana-3.svg',
  Code: '{3}',
  CMC: 3,
};

manaIcons['four'] = {
  Order: 4,
  Icon: 'assets/mana/colorless/md-mana-4.svg',
  Code: '{4}',
  CMC: 4,
};

manaIcons['five'] = {
  Order: 5,
  Icon: 'assets/mana/colorless/md-mana-5.svg',
  Code: '{5}',
  CMC: 5,
};

manaIcons['six'] = {
  Order: 6,
  Icon: 'assets/mana/colorless/md-mana-6.svg',
  Code: '{6}',
  CMC: 6,
};

manaIcons['seven'] = {
  Order: 7,
  Icon: 'assets/mana/colorless/md-mana-7.svg',
  Code: '{7}',
  CMC: 7,
};

manaIcons['eight'] = {
  Order: 8,
  Icon: 'assets/mana/colorless/md-mana-8.svg',
  Code: '{8}',
  CMC: 8,
};

manaIcons['nine'] = {
  Order: 9,
  Icon: 'assets/mana/colorless/md-mana-9.svg',
  Code: '{9}',
  CMC: 9,
};

manaIcons['ten'] = {
  Order: 10,
  Icon: 'assets/mana/colorless/md-mana-10.svg',
  Code: '{10}',
  CMC: 10,
};

manaIcons['eleven'] = {
  Order: 11,
  Icon: 'assets/mana/colorless/md-mana-11.svg',
  Code: '{11}',
  CMC: 11,
};

manaIcons['twelve'] = {
  Order: 12,
  Icon: 'assets/mana/colorless/md-mana-12.svg',
  Code: '{12}',
  CMC: 12,
};

manaIcons['thirteen'] = {
  Order: 13,
  Icon: 'assets/mana/colorless/md-mana-13.svg',
  Code: '{13}',
  CMC: 13,
};

manaIcons['fourteen'] = {
  Order: 14,
  Icon: 'assets/mana/colorless/md-mana-14.svg',
  Code: '{14}',
  CMC: 14,
};

manaIcons['fifteen'] = {
  Order: 15,
  Icon: 'assets/mana/colorless/md-mana-15.svg',
  Code: '{15}',
  CMC: 15,
};

manaIcons['sixteen'] = {
  Order: 16,
  Icon: 'assets/mana/colorless/md-mana-16.svg',
  Code: '{16}',
  CMC: 16,
};

manaIcons['colorless'] = {
  Order: 98,
  Icon: 'assets/mana/colorless/md-mana-c.svg',
  Code: '{C}',
  CMC: 1,
};

manaIcons['snow'] = {
  Order: 99,
  Icon: 'assets/mana/colorless/md-mana-cs.svg',
  Code: '{S}',
  CMC: 1,
};

manaIcons['white'] = {
  Order: 1000,
  Icon: 'assets/mana/mono/md-mana-w.svg',
  Code: '{W}',
  CMC: 1,
};
manaIcons['white-blue'] = {
  Order: 100,
  Icon: 'assets/mana/hybrid/md-mana-wu.svg',
  Code: '{W/U}',
  CMC: 1,
};
manaIcons['white-black'] = {
  Order: 101,
  Icon: 'assets/mana/hybrid/md-mana-wb.svg',
  Code: '{W/B}',
  CMC: 1,
};
manaIcons['white-phyrexian'] = {
  Order: 910,
  Icon: 'assets/mana/phyrexian/md-mana-wp.svg',
  Code: '{W/P}',
  CMC: 1,
};

manaIcons['blue'] = {
  Order: 2000,
  Icon: 'assets/mana/mono/md-mana-u.svg',
  Code: '{U}',
  CMC: 1,
};
manaIcons['blue-black'] = {
  Order: 200,
  Icon: 'assets/mana/hybrid/md-mana-ub.svg',
  Code: '{U/B}',
  CMC: 1,
};
manaIcons['blue-red'] = {
  Order: 201,
  Icon: 'assets/mana/hybrid/md-mana-ur.svg',
  Code: '{U/R}',
  CMC: 1,
};
manaIcons['blue-phyrexian'] = {
  Order: 920,
  Icon: 'assets/mana/phyrexian/md-mana-up.svg',
  Code: '{U/P}',
  CMC: 1,
};

manaIcons['black'] = {
  Order: 3000,
  Icon: 'assets/mana/mono/md-mana-b.svg',
  Code: '{B}',
  CMC: 1,
};
manaIcons['black-red'] = {
  Order: 300,
  Icon: 'assets/mana/hybrid/md-mana-br.svg',
  Code: '{B/R}',
  CMC: 1,
};
manaIcons['black-green'] = {
  Order: 301,
  Icon: 'assets/mana/hybrid/md-mana-bg.svg',
  Code: '{B/G}',
  CMC: 1,
};
manaIcons['black-phyrexian'] = {
  Order: 930,
  Icon: 'assets/mana/phyrexian/md-mana-bp.svg',
  Code: '{B/P}',
  CMC: 1,
};

manaIcons['red'] = {
  Order: 4000,
  Icon: 'assets/mana/mono/md-mana-r.svg',
  Code: '{R}',
  CMC: 1,
};
manaIcons['red-green'] = {
  Order: 400,
  Icon: 'assets/mana/hybrid/md-mana-rg.svg',
  Code: '{R/G}',
  CMC: 1,
};
manaIcons['red-white'] = {
  Order: 401,
  Icon: 'assets/mana/hybrid/md-mana-rw.svg',
  Code: '{R/W}',
  CMC: 1,
};
manaIcons['red-phyrexian'] = {
  Order: 940,
  Icon: 'assets/mana/phyrexian/md-mana-rp.svg',
  Code: '{R/P}',
  CMC: 1,
};

manaIcons['green'] = {
  Order: 5000,
  Icon: 'assets/mana/mono/md-mana-g.svg',
  Code: '{G}',
  CMC: 1,
};
manaIcons['green-white'] = {
  Order: 500,
  Icon: 'assets/mana/hybrid/md-mana-gw.svg',
  Code: '{G/W}',
  CMC: 1,
};
manaIcons['green-blue'] = {
  Order: 501,
  Icon: 'assets/mana/hybrid/md-mana-gu.svg',
  Code: '{G/U}',
  CMC: 1,
};
manaIcons['green-phyrexian'] = {
  Order: 950,
  Icon: 'assets/mana/phyrexian/md-mana-gp.svg',
  Code: '{G/P}',
  CMC: 1,
};

export { manaIcons };
