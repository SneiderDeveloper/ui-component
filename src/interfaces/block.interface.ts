export interface BlockWithData extends Block {
  mainEntityData?: any[]
}

export interface Block {
  attributes:       Attributes;
  component:        Component;
  createdAt:        Date;
  createdBy:        number;
  deletedAt:        Date | null;
  deletedBy:        number | null;
  entity:           Entity;
  es:               LanguageBlock;
  files:            any[];
  gridPosition:     string;
  id:               number;
  internalTitle:    string;
  layoutId:         number;
  mediaFiles:       any;
  mobileAttributes: any;
  organizationId:   any;
  sortOrder:        number;
  status:           number;
  systemName:       string;
  updatedAt:        Date;
  updatedBy:        number;
}

export interface Attributes {
  mainblock:                      Mainblock;
  componentAttributes:            ComponentAttributes;
  itemComponentAttributes:        ItemComponentAttributes;
  productItemComponentAttributes: ProductItemComponentAttributes;
}

export interface ComponentAttributes {
  layout:           string | null;
  class:            string | null;
  columns:          string | null;
  textPosition:     string | null;
  textAlign:        string | null;
  titleLineMarginY: string | null;
  titleClasses:     any;
  titleWeight:      string | null;
  titleTarget:      string | null;
  subtitleClasses:  any;
  withLineTitle:    string | null;
  lineTitleConfig:  LineTitleConfig;
  mediasSingle:     any[];
  mediasMulti:      any[];
}

export interface LineTitleConfig {
  background: string | null;
  height:     string | null;
  width:      string | null;
  margin:     string | null;
}

export interface ItemComponentAttributes {
  layout:                     string | null;
  target:                     string | null;
  itemClasses:                any;
  itemMarginB:                any;
  contentBorderRounded:       any;
  contentBorderRoundedType:   string | null;
  contentBorder:              string | null;
  contentBorderShadows:       string | null;
  contentBorderShadowsHover:  string | null;
  orderClasses:               OrderClasses;
  containerActive:            string | null;
  containerType:              string | null;
  containerJustify:           string | null;
  containerAlign:             string | null;
  containerColumn:            string | null;
  withTitle:                  string | null;
  titleTextSize:              string | null;
  titleTextSizeMobile:        string | null;
  titleTextDecoration:        string | null;
  titleShadow:                any;
  titleHead:                  string | null;
  titleClasses:               any;
  withSummary:                string | null;
  summaryTextSize:            string | null;
  summaryAlign:               string | null;
  summaryMarginT:             string | null;
  summaryMarginB:             string | null;
  summaryTextDecoration:      string | null;
  numberCharactersSummary:    string | null;
  summaryHeight:              any;
  summaryShadow:              any;
  summaryClasses:             any;
  withCategory:               string | null;
  categoryTextSize:           string | null;
  categoryTextDecoration:     string | null;
  categoryShadow:             any;
  categoryClasses:            any;
  withCreatedDate:            string | null;
  createdDateTextSize:        string | null;
  createdDateTextDecoration:  string | null;
  createdDateShadow:          any;
  createdDateClasses:         any;
  withViewMoreButton:         string | null;
  buttonLayout:               any;
  buttonSize:                 string | null;
  buttonAlign:                string | null;
  buttonColor:                string | null;
  buttonMarginT:              string | null;
  buttonMarginB:              string | null;
  buttonIconLR:               string | null;
  buttonShadow:               any;
  buttonItemClasses:          any;
  buttonConfig:               ItemComponentAttributesButtonConfig;
  withImage:                  string | null;
  mediaImage:                 string | null;
  imagePosition:              string | null;
  imageWidth:                 string | null;
  imageHeight:                string | null;
  imageMaxHeight:             string | null;
  imageMinHeight:             string | null;
  imageAspect:                string | null;
  imageAspectMobile:          string | null;
  imageObject:                string | null;
  imageBorderRadio:           string | null;
  imageBorderRadioType:       string | null;
  imageBorderWidth:           string | null;
  imageBorderStyle:           string | null;
  videoLoop:                  string | null;
  videoAutoplay:              string | null;
  videoMuted:                 string | null;
  videoControls:              string | null;
  withImageOpacity:           string | null;
  imageOpacityHover:          string | null;
  imageShadow:                any;
  imageAnimate:               any;
  imageAnimateOpacityHover:   any;
  contentAnimateOpacityHover: any;
  itemAnimate:                any;
  itemDelayIn:                string | null;
  itemEasing:                 string | null;
  itemOne:                    string | null;
  itemMirror:                 string | null;
}

export interface ItemComponentAttributesButtonConfig {
  color:           string | null;
  background:      string | null;
  border:          string | null;
  transition:      string | null;
  boxShadow:       string | null;
  borderRadius:    string | null;
  colorHover:      string | null;
  backgroundHover: string | null;
  borderHover:     string | null;
  boxShadowHover:  string | null;
}

export interface OrderClasses {
  photo:          string | null;
  title:          string | null;
  date:           string | null;
  summary:        string | null;
  categoryTitle:  string | null;
  viewMoreButton: string | null;
}

export interface Mainblock {
  id:                   string;
  container:            string;
  overlay:              any;
  backgrounds:          Backgrounds;
  row:                  string | null;
  columns:              string | null;
  position:             string | null;
  width:                string | null;
  height:               string | null;
  backgroundColor:      any;
  blockClasses:         any;
  blockStyle:           any;
  withButton:           string | null;
  buttonPosition:       string | null;
  buttonLayout:         any;
  buttonSize:           string | null;
  buttonAlign:          string | null;
  buttonColor:          string | null;
  buttonTextSize:       string | null;
  buttonMarginT:        string | null;
  buttonMarginB:        string | null;
  buttonShadow:         any;
  buttonUrl:            any;
  buttonTarget:         string | null;
  buttonIcon:           any;
  buttonIconLR:         string | null;
  buttonLabel:          string | null;
  buttonClasses:        null;
  buttonConfig:         MainblockButtonConfig;
  animateBlockName:     null;
  animateBlockEasing:   string | null;
  animateBlockOnce:     string | null;
  animateBlockMirror:   string | null;
  blockStyleResponsive: any[];
}

export interface Backgrounds {
  position:   string | null;
  size:       string | null;
  repeat:     string | null;
  color:      any;
  attachment: any;
}

export interface MainblockButtonConfig {
  color:      string | null;
  background: string | null;
  border:     string | null;
  transition: string | null;
}

export interface ProductItemComponentAttributes {
  itemListLayout:                    string | null;
  externalPadding:                   string | null;
  externalBorderRadius:              string | null;
  externalBorder:                    string | null;
  externalShadowOnHover:             string | null;
  addToCartButtonAction:             string | null;
  buttonsLayout:                     string | null;
  buttonsPosition:                   string | null;
  addToCartIcon:                     string | null;
  wishlistEnable:                    string | null;
  wishlistIcon:                      string | null;
  showButtonsOnMouseHover:           string | null;
  withTextInAddToCart:               string | null;
  withIconInAddToCart:               string | null;
  addToCartWithQuantity:             string | null;
  addToCartWithQuantityPaddingX:     string | null;
  addToCartWithQuantityPaddingY:     string | null;
  addToCartWithQuantityMarginBottom: string | null;
  withDescription:                   string | null;
  withPrice:                         string | null;
  contentAlign:                      string | null;
  contentExternalPaddingX:           string | null;
  contentExternalPaddingY:           string | null;
  contentTitleFontSize:              string | null;
  contentTitleToUppercase:           string | null;
  contentTitleMaxHeight:             string | null;
  contentTitleNumberOfCharacters:    string | null;
  contentTitleFontWeight:            string | null;
  contentCategoryEnable:             string | null;
  contentCategoryFontSize:           string | null;
  contentCategoryToUppercase:        string | null;
  contentCategoryFontWeight:         string | null;
  contentPriceFontSize:              string | null;
  contentPriceFontWeight:            string | null;
  discountRibbonStyle:               string | null;
  discountPosition:                  string | null;
  imageAspect:                       string | null;
  imagePadding:                      string | null;
  imageBorder:                       string | null;
  imageBorderRadius:                 string | null;
  imageObjectFit:                    string | null;
}

export interface Component {
  nameSpace:  string;
  systemName: string;
}

export interface Entity {
  type:   string;
  id:     number | null;
  params: Params | null;
}

export interface Params {
  filter: any[];
  take:   number;
}

export interface LanguageBlock {
  internalTitle: string;
}

//Module Block Config
export interface ModuleBlockConfig {
  title:      string;
  systemName: string;
  nameSpace:  string;
  internal:   boolean;
  content?: SelectContent[];
  contentFields?: {
    [key: string]: PropsDynamicField
  };
  childBlocks?: ChildBlockConfig;
  attributes: ModuleBlockConfigAttributes;
}

export interface ChildBlockConfig {
  blockAttribute?: string;
  itemComponentAttributes?: string;
  productItemComponentAttributes?: string;
}

export interface SelectContent {
  label: string;
  value: string;
  loadOptions?: [];
}

export interface ModuleBlockConfigAttributes {
  general:        ModuleBlockConfigAttributesFields;
  boton:          ModuleBlockConfigAttributesFields;
  animationBlock: ModuleBlockConfigAttributesFields;
  responsive:     ModuleBlockConfigAttributesFields;
}

export interface AnimationBlockFields {
  animateBlockName:     PropsDynamicField;
  animateBlockDuration: PropsDynamicField;
  animateBlockOffset:   PropsDynamicField;
  animateBlockDelay:    PropsDynamicField;
  animateBlockEasing:   PropsDynamicField;
  animateBlockOnce:     PropsDynamicField;
  animateBlockMirror:   PropsDynamicField;
}

export interface PropsDynamicField {
  name:   string;
  value?: any;
  type:   string;
  columns?: string;
  isTranslatable?: boolean;
  props:  any;
  help?:  Help;
}

export interface Help {
  description: string;
}

export interface BotonFields {
  withButton:           PropsDynamicField;
  buttonPosition:       PropsDynamicField;
  buttonLayout:         PropsDynamicField;
  buttonSize:           PropsDynamicField;
  buttonAlign:          PropsDynamicField;
  buttonColor:          PropsDynamicField;
  buttonTextSize:       PropsDynamicField;
  buttonMarginT:        PropsDynamicField;
  buttonMarginB:        PropsDynamicField;
  buttonShadow:         PropsDynamicField;
  buttonUrl:            PropsDynamicField;
  buttonTarget:         PropsDynamicField;
  buttonIcon:           PropsDynamicField;
  buttonIconLR:         PropsDynamicField;
  buttonIconColor:      PropsDynamicField;
  buttonIconColorHover: PropsDynamicField;
  buttonLabel:          PropsDynamicField;
  buttonClasses:        PropsDynamicField;
  buttonConfig:         PropsDynamicField;
}

export interface ModuleBlockConfigAttributesFields {
  title:  string;
  fields: GeneralFields | BotonFields | AnimationBlockFields | ResponsiveFields;
}

export interface GeneralFields {
  id:              PropsDynamicField;
  container:       PropsDynamicField;
  overlay:         PropsDynamicField;
  backgroundColor: PropsDynamicField;
  backgrounds:     PropsDynamicField;
  row:             PropsDynamicField;
  columns:         PropsDynamicField;
  position:        PropsDynamicField;
  zIndex:          PropsDynamicField;
  top:             PropsDynamicField;
  bottom:          PropsDynamicField;
  left:            PropsDynamicField;
  right:           PropsDynamicField;
  width:           PropsDynamicField;
  height:          PropsDynamicField;
  blockClasses:    PropsDynamicField;
  blockStyle:      PropsDynamicField;
}

export interface ResponsiveFields {
  blockStyleResponsive: PropsDynamicField;
}

export interface ModulesData {
  [key: string]: ModulesDataBlock,
}

export interface ModulesDataBlock {
  [key: string]: ModuleBlockConfig,
}