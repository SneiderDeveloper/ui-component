import { v4 as uuidv4 } from 'uuid';
import {BlockParams} from "@/components/MainBlock/interface";

export const controllerMain = (params: BlockParams) => {
  const result = instanceGeneralAttributes(params)

}

//Instance the component attributes
export const instanceGeneralAttributes = (params: BlockParams): BlockParams => {
  const backgrounds = params.backgrounds ?? {
    position: "center",
    size: "cover",
    repeat: "no-repeat",
    color: "",
    attachment: ""
  }

  const blockConfig = {
    ...params.blockConfig,
    status: true,
  }

  let componentConfig;

  if(params.componentType) {
    const attributes = params.blockConfig?.attributes?.componentAttributes ?? {}

    componentConfig = {
      systemName: params.blockConfig?.component?.systemName ?? '',
      nameSpace: params.blockConfig?.component?.nameSpace ?? '',
      attributes
    }
/**
    switch ($this->blockConfig->component->systemName) {
      case 'isite::carousel.owl-carousel':
        //Replace the itemComponentAttributes for IcommerceItem
        if ($entity->type == "Modules\Icommerce\Repositories\ProductRepository") {
          if (isset($this->componentConfig["attributes"]["productItemComponentAttributes"])) {
            $this->componentConfig["attributes"]["itemComponentAttributes"] = $this->componentConfig["attributes"]["productItemComponentAttributes"];
            unset($this->componentConfig["attributes"]["productItemComponentAttributes"]);
          }
        }
        break;
      case 'slider::slider.Owl':
        $this->componentConfig["attributes"]["id"] = $entity->id;
        break;
      case 'isite::items-list':
        $entityTypeExploded = explode("\\", str_replace("/", "\\", $entity->type));
        $this->componentConfig["attributes"]["moduleName"] = $entityTypeExploded[1];
        $this->componentConfig["attributes"]["entityName"] = $entityTypeExploded[3];
        break;
      case 'isite::lists':
        $this->componentConfig["attributes"]["repository"] = $entity->type;
        $this->componentConfig["attributes"]["params"] = json_decode(json_encode($entity->params), true);
        // Replace the itemComponentAttributes for IcommerceItem
        if ($entity->type == "Modules\Icommerce\Repositories\ProductRepository") {
          if (isset($this->componentConfig["attributes"]["productItemComponentAttributes"])) {
            $this->componentConfig["attributes"]["itemComponentAttributes"] = $this->componentConfig["attributes"]["productItemComponentAttributes"];
            unset($this->componentConfig["attributes"]["productItemComponentAttributes"]);
          }
        }
        break;
      case 'isite::item-list':
        $this->componentConfig["attributes"]["item"] = $this->getInheritcontent($entity);
        break;
    }
    */
  }

  return {
    ...params,
    id: params.id ?? uuidv4(),
    backgrounds,
    blockConfig,
    componentType: null,//Verificar si lo necesito
    componentConfig: null,//Verificar si lo necesito
    isBlade: false,//Verificar si lo necesito
    view: "ibuilder::frontend.components.blocks" //Verificar si lo necesito
  }
}

/**
class Block extends Component
{
  //Get all params
  $params = get_defined_vars();
  //Init
  $this->instanceBlockConfigFiles($params);
  $this->instanceComponentType($params);
  $this->instanceComponentConfig();

}

  /**
   * Instance the Media files related to the block
  public function instanceBlockConfigFiles($params)
{
  //Instance the media attributes
  $componentAttrs = $this->blockConfig->attributes->componentAttributes;
  $mediasSingle = (array)($componentAttrs->medias_single ?? $componentAttrs->mediasSingle ?? []);
  $mediasMulti = (array)($componentAttrs->medias_multi ?? $componentAttrs->mediasMulti ?? []);
  //Instance the blockConfigfiles
  $this->blockConfig->mediaFiles = array_merge(
    array_map(function ($zone) {
      return null;
    }, $mediasSingle),
    array_map(function ($zone) {
      return null;
    }, $mediasMulti)
  );
  //Instance the files ID
  $filesId = array_values($mediasSingle);
  //Merge the multi files ID
  foreach ($mediasMulti as $zone) {
  $filesId = array_merge($filesId, ((array)($zone))["files"] ?? []);
}
  //Request the fiels
  $filesData = File::whereIn('id', $filesId)->get();
  //Set files of media single
  foreach (array_keys($mediasSingle) as $singleZone) {
  $singleFile = $filesData->where('id', $mediasSingle[$singleZone])->first();
  $this->blockConfig->mediaFiles[$singleZone] = !$singleFile ? null : $this->transformFile($singleFile);
}
  //Set files of media multi
  foreach (array_keys($mediasMulti) as $multiZone) {
  $multiFiles = $filesData->whereIn('id', ($mediasMulti[$multiZone]->files ?? []));
  $this->blockConfig->mediaFiles[$multiZone] = !$multiFiles->count() ? [] : $multiFiles->map(function ($file, $keyFile) {
    return $this->transformFile($file);
  })->toArray();
}
  //Set blockConfig media File
  $this->blockConfig->mediaFiles = json_decode(json_encode($this->blockConfig->mediaFiles));
  $this->blockConfig->attributes->componentAttributes->mediaFiles = $this->blockConfig->mediaFiles;
}

  /**
   * Validate and instance if the dynamic component is Liveware or Blade
   * @return void
   *
  public function instanceComponentType($params)
{
  $systemName = $this->blockConfig->component->systemName ?? null;
  $nameSpace = $this->blockConfig->component->nameSpace ?? null;

  //Validate the parameters
  if ($systemName) {
    //Validate if the component is Blade
    if ($nameSpace && class_exists($nameSpace)) $this->componentType = "blade";
    //Validate if the component is liveware
    if (!$this->componentType) {
      try {
        $finder = app('Livewire\LivewireManager');
        $lwClass = $finder->getClass($systemName);
        $this->blockConfig->component->nameSpace = $lwClass;
        $this->componentType = "livewire";
      } catch (\Exception $e) {
      }
    }
  }
  //Error view
  if (!$this->componentType) $this->view = "ibuilder::frontend.components.blocks-error";
}

  /**
   * Instance the component config
   * @return void
   *
  public function instanceComponentConfig()
{
  if ($this->componentType) {
    //Instance the default config
    $this->componentConfig = [
      "systemName" => $this->blockConfig->component->systemName ?? null,
      "nameSpace" => $this->blockConfig->component->nameSpace ?? null,
      "attributes" => []
  ];
    //Instance the default Attributes by component
    $attributes = $this->blockConfig->attributes ?? [];
    //Set component attirbutes
    $this->componentConfig["attributes"] = json_decode(json_encode($attributes->componentAttributes ?? []), true);
    //Set child Attributes
    foreach ($attributes as $name => $attr) {
      if (!in_array($name, ["componentAttributes", "blockAttributes"])) {
        $this->componentConfig["attributes"][$name] = json_decode(json_encode($attr), true);
      }
    }
    //Set the entity attributes by component
    $entity = $this->blockConfig->entity ?? null;
    if ($entity) {

    }
  }
}

}


 */