import {
  _float,
  _position,
  _wrapper,
  _ribbon,
  _triangle,
} from './ribbons/_basic';
import {
  _percent,
  _option,
  _indicator,
  _label,
  _cutout,
  _fill,
} from './percent/_percent';
import {
  input_arrow,
  input_float,
  input_symbol,
  input_ticker,
  _input,
} from './forms/input/_input';
import {
  swap_actions,
  swap_basket,
  swap_bottom,
  swap_card,
  swap_center,
  swap_chevron,
  swap_coin,
  swap_container,
  swap_float,
  swap_form,
  swap_icon,
  swap_layer,
  swap_layers,
  swap_top,
  swap_view,
  swap_wrapper,
  _swap,
} from './swap/_swap';
import {
  _basket_maker,
  _header,
  _content,
  _title,
  _search,
  _list,
  _items,
  _card,
  _actions,
  _tokens,
  _add,
} from './basket/_basket_maker';
import {
  _review,
  _title_review,
  _content_review,
  _container_review,
  _button_review,
} from './review/review';
import {
  _category,
  _category_title,
  _category_list,
} from './basket/category/category';
import { _basket_search } from './basket/category/search/search';
import { _item } from './basket/category/item/item';
import {
  token_tokens,
  tokens_icon,
  tokens_name,
} from './basket/category/tokens/tokens';
import { _form, form_section, form_weights } from './trade/form/form';
import {
  trade_actions,
  trade_basket,
  trade_center,
  trade_chevron,
  trade_coin,
  trade_content,
  trade_float,
  trade_form,
  trade_icon,
  trade_title,
  trade_wrapper,
  _trade,
} from './trade/trade';
import {
  wallet_action,
  wallet_button,
  wallet_container,
  wallet_content,
  _wallet,
} from './wallet/wallet';
import {
  connect_container,
  connect_list,
  connect_walletconnect,
  _connect,
} from './wallet/connect/connect';
import {
  list_bubble,
  list_icon,
  list_item,
  list_name,
} from './wallet/connect/list/list';
import {
  qr_code,
  qr_container,
  qr_float,
  qr_logo,
  qr_name,
  qr_title,
  _qr,
} from './wallet/qr/qr';
import { _home } from './home/home';
import { layer_layers } from './layer/layer';
import {
  discord_button,
  discord_chat,
  discord_overlay,
  _discord,
} from './discord/discord';
import { popover_container, _popover } from './popover/popover';
import { _proxy } from './proxy/proxy';

const styles = {
  ribbons: {
    basic: {
      float: _float,
      position: _position,
      wrapper: _wrapper,
      ribbon: _ribbon,
      triangle: _triangle,
    },
  },
  percent: {
    basic: {
      container: _percent,
      option: _option,
      indicator: _indicator,
      label: _label,
      cutout: _cutout,
      fill: _fill,
    },
  },
  forms: {
    input: _input,
    input_float: input_float,
    input_arrow: input_arrow,
    input_ticker: input_ticker,
    input_symbol: input_symbol,
  },
  swap: {
    swap: _swap,
    swap_card: swap_card,
    swap_view: swap_view,
    swap_layers: swap_layers,
    swap_layer: swap_layer,
    swap_wrapper: swap_wrapper,
    swap_container: swap_container,
    swap_center: swap_center,
    swap_top: swap_top,
    swap_bottom: swap_bottom,
    swap_form: swap_form,
    swap_basket: swap_basket,
    swap_coin: swap_coin,
    swap_chevron: swap_chevron,
    swap_float: swap_float,
    swap_actions: swap_actions,
    swap_icon: swap_icon,
  },
  basket: {
    basket: _basket_maker,
    wrapper: _wrapper,
    header: _header,
    content: _content,
    title: _title,
    basket_search: _search,
    list: _list,
    items: _items,
    card: _card,
    actions: _actions,
    tokens: _tokens,
    add: _add,
  },
  review: {
    review: _review,
    title_review: _title_review,
    content_review: _content_review,
    container_review: _container_review,
    button_review: _button_review,
  },
  category: {
    category: _category,
    category_item: _category_title,
    category_list: _category_list,
  },
  search: {
    basket_search: _basket_search,
  },
  item: {
    item: _item,
  },
  tokens: {
    tokens: token_tokens,
    token_icon: tokens_icon,
    token_name: tokens_name,
  },
  form: {
    form: _form,
    section: form_section,
    weights: form_weights,
  },
  trade: {
    trade: _trade,
    trade_wrapper: trade_wrapper,
    trade_actions: trade_actions,
    trade_basket: trade_basket,
    trade_center: trade_center,
    trade_chevron: trade_chevron,
    trade_coin: trade_coin,
    trade_float: trade_float,
    trade_form: trade_form,
    trade_icon: trade_icon,
    trade_title: trade_title,
    trade_content: trade_content,
  },
  wallet: {
    wallet: _wallet,
    wallet_action: wallet_action,
    wallet_content: wallet_content,
    wallet_button: wallet_button,
    wallet_container: wallet_container,
  },
  connect: {
    connect: _connect,
    connect_container: connect_container,
    connect_list: connect_list,
    connect_walletconnect: connect_walletconnect,
  },
  list: {
    list: _list,
    list_item: list_item,
    list_bubble: list_bubble,
    list_icon: list_icon,
    list_name: list_name,
  },
  QR: {
    qr: _qr,
    qr_container: qr_container,
    qr_code: qr_code,
    qr_name: qr_name,
    qr_title: qr_title,
    qr_float: qr_float,
    qr_logo: qr_logo,
  },
  home: {
    home: _home,
  },
  layers: {
    layers: layer_layers,
  },
  discord: {
    discord: _discord,
    discord_overlay: discord_overlay,
    discord_chat: discord_chat,
    discord_button: discord_button,
  },
  popover: {
    popover: _popover,
    popover_container: popover_container,
  },
  proxy: {
    proxy: _proxy,
  },
};
export default styles;
