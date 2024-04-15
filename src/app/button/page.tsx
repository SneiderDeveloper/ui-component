"use client";

import { Button } from "@/components/Button/Button";
import { CameraIcon } from "@/components/Button/Icons/CameraIcon";
import { UserIcon } from "@/components/Button/Icons/UserIcon";
import { HeartIcon } from "@/components/Button/Icons/HeartIcon";
import { Spinner } from "@/components/Button/Icons/Spinner";

export default function ButtonPage() {
  const buttonOne = {
    children: "One",
    attributes: {
      color: "primary",
      size: "lg",
    },
  };
  const buttonDisable = {
    children: "Disable",
    attributes: {
      color: "primary",
      size: "lg",
      isDisabled: true,
    },
  };
  const buttonSizeOne = {
    children: "Size-sm",
    attributes: {
      color: "secondary",
      size: "sm",
    },
  };

  const buttonSizeTwo = {
    children: "Size-md",
    attributes: {
      color: "secondary",
      size: "md",
    },
  };

  const buttonSizetrhee = {
    children: "Size-lg",
    attributes: {
      color: "secondary",
      size: "lg",
    },
  };

  const buttonRadiusMD = {
    children: "Radius-md",
    attributes: {
      color: "secondary",
      size: "md",
      radius: "md",
    },
  };
  const buttonRadiusFull = {
    children: "Radius-full",
    attributes: {
      color: "secondary",
      size: "md",
      radius: "full",
    },
  };
  const buttonRadiusNone = {
    children: "Radius-none",
    attributes: {
      color: "secondary",
      size: "md",
      radius: "none",
    },
  };

  const buttonColorprimary = {
    children: "Color-primary",
    attributes: {
      color: "primary",
      size: "md",
    },
  };

  const buttonColorsecondary = {
    children: "Color-secondary",
    attributes: {
      color: "secondary",
      size: "md",
    },
  };

  const buttonColorsuccess = {
    children: "Success",
    attributes: {
      color: "success",
      size: "md",
    },
  };

  const buttonColordanger = {
    children: "Color-danger",
    attributes: {
      color: "danger",
      size: "md",
    },
  };

  const buttonVariantSolid = {
    children: "solid",
    attributes: {
      color: "danger",
      size: "md",
      variant: "solid",
    },
  };

  const buttonVariantFaded = {
    children: "Faded",
    attributes: {
      color: "danger",
      size: "md",
      variant: "faded",
    },
  };

  const buttonVariantBordered = {
    children: "Bordered",
    attributes: {
      color: "danger",
      size: "md",
      variant: "bordered",
    },
  };

  const buttonVariantLight = {
    children: "Light",
    attributes: {
      color: "danger",
      size: "md",
      variant: "light",
    },
  };

  const buttonSelectionFlat = {
    children: "flat",
    attributes: {
      color: "danger",
      size: "md",
      variant: "flat",
    },
  };

  const buttonVariantGhost = {
    children: "Ghost",
    attributes: {
      color: "danger",
      size: "md",
      variant: "ghost",
    },
  };

  const buttonVariantShadow = {
    children: "Shadow",
    attributes: {
      color: "danger",
      size: "md",
      variant: "shadow",
    },
  };

  const buttonisLoading = {
    children: "IsLoading",
    attributes: {
      color: "primary",
    },
  };

  const buttoniLoadingSpiner = {
    children: "IsLoading-Spiner",
    attributes: {
      color: "primary",
    },
  };

  const buttonIconsCamera = {
    children: "Photo",
    attributes: {
      color: "success",
    },
  };
  const buttonIconsUser = {
    children: "Delete User",
    attributes: {
      color: "danger",
      size: "md",
      variant: "ghost",
    },
  };

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-3 gap-7">
        <Button children={buttonOne.children} {...buttonOne.attributes} />

        <Button
          children={buttonDisable.children}
          {...buttonDisable.attributes}
        />
        {/*///////////////////////////////////////////////   button zizes*/}
        <div>
          <Button
            children={buttonSizeOne.children}
            {...buttonSizeOne.attributes}
          />
          <Button
            children={buttonSizeTwo.children}
            {...buttonSizeTwo.attributes}
          />

          <Button
            children={buttonSizetrhee.children}
            {...buttonSizetrhee.attributes}
          />
        </div>
        <div>
          <Button
            children={buttonRadiusFull.children}
            {...buttonRadiusFull.attributes}
          />
          <Button
            children={buttonRadiusMD.children}
            {...buttonRadiusMD.attributes}
          />
          <Button
            children={buttonRadiusNone.children}
            {...buttonRadiusNone.attributes}
          />
        </div>
        <div>
          <Button
            children={buttonColorprimary.children}
            {...buttonColorprimary.attributes}
          />
          <Button
            children={buttonColorsecondary.children}
            {...buttonColorsecondary.attributes}
          />
          <Button
            children={buttonColorsuccess.children}
            {...buttonColorsuccess.attributes}
          />
          <Button
            children={buttonColordanger.children}
            {...buttonColordanger.attributes}
          />
        </div>
        <div>
          <Button
            children={buttonVariantSolid.children}
            {...buttonVariantSolid.attributes}
          />
          <Button
            children={buttonVariantFaded.children}
            {...buttonVariantFaded.attributes}
          />
          <Button
            children={buttonVariantBordered.children}
            {...buttonVariantBordered.attributes}
          />
          <Button
            children={buttonVariantLight.children}
            {...buttonVariantLight.attributes}
          />
          <Button
            children={buttonSelectionFlat.children}
            {...buttonSelectionFlat.attributes}
          />
          <Button
            children={buttonVariantGhost.children}
            {...buttonVariantGhost.attributes}
          />
          <Button
            children={buttonVariantShadow.children}
            {...buttonVariantShadow.attributes}
          />
        </div>
        <div>
          <Button
            children={buttonisLoading.children}
            {...buttonisLoading.attributes}
          />
          <Button {...buttoniLoadingSpiner.attributes}>
            <Spinner />
            {buttoniLoadingSpiner.children}
          </Button>
        </div>
        <div>
          <Button {...buttonIconsCamera.attributes}>
            {buttonIconsCamera.children}
            <CameraIcon />
          </Button>
          <Button {...buttonIconsUser.attributes}>
            {buttonIconsUser.children}
            <UserIcon />
          </Button>
        </div>
      </div>
      {/* esta manera de colocar los atributos directamente  */}
      <div className="grid grid-cols-3 gap-7">
        <Button variant="bordered" color="danger">
          Example Button
        </Button>
        <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          this is gradient
        </Button>
        <div>
          <Button
            isIconOnly
            color="warning"
            variant="faded"
            arial-label="Photo"
          >
            <CameraIcon />
          </Button>
          <Button isIconOnly color="danger" variant="shadow" arial-label="like">
            <HeartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
