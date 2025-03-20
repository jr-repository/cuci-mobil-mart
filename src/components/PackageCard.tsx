
import React from "react";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/formatCurrency";
import { Package as PackageType } from "@/data/packages";
import { Check, Diamond, Package, PiggyBank, Star } from "lucide-react";
import { Link } from "react-router-dom";

type PackageCardProps = {
  package: PackageType;
  className?: string;
};

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg, className }) => {
  // Function to get the icon based on the package's icon property
  const getIcon = () => {
    switch (pkg.icon) {
      case "diamond":
        return <Diamond className="w-8 h-8" />;
      case "star":
        return <Star className="w-8 h-8" />;
      case "piggy-bank":
        return <PiggyBank className="w-8 h-8" />;
      case "package":
      default:
        return <Package className="w-8 h-8" />;
    }
  };

  return (
    <div
      className={cn(
        "package-card group",
        pkg.popular && "package-card-popular",
        pkg.recommended && "border-yellow-accent",
        className
      )}
    >
      {/* Package icon and name */}
      <div className="flex items-center mb-4">
        <div className={cn("p-3 rounded-lg mr-3 text-white", pkg.color)}>
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold">{pkg.name}</h3>
      </div>

      {/* Price */}
      <div className="mb-6">
        <p className="text-3xl font-bold text-royal-blue">
          {formatCurrency(pkg.price)}
        </p>
        <p className="text-sm text-gray-500">Harga sudah termasuk PPN</p>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6">{pkg.description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-blue-main mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <Link
        to={`/shop?package=${pkg.id}`}
        className={cn(
          "w-full py-3 px-4 rounded-md text-center font-medium transition-colors duration-300 block",
          pkg.recommended 
            ? "bg-yellow-accent hover:bg-yellow-500 text-dark-blue" 
            : "bg-blue-main hover:bg-royal-blue text-white"
        )}
      >
        Pilih Paket
      </Link>

      {/* Recommended badge */}
      {pkg.recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-accent text-dark-blue text-xs font-bold px-3 py-1 rounded-full">
          Rekomendasi
        </div>
      )}
    </div>
  );
};

export default PackageCard;
