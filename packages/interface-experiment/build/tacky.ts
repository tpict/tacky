namespace DataType {
    export type Px = `${number}px`;

    export type Rem = `${number}rem`;

    export type S = `${number}s`;

    export type Ms = `${number}ms`;

    export type Deg = `${number}deg`;

    export type Rad = `${number}rad`;

    export type Dpi = `${number}dpi`;

    export type Dpcm = `${number}dpcm`;

    export type Length = Px | Rem;

    export type Time = S | Ms;

    export type Angle = Deg | Rad;

    export type Resolution = Dpi | Dpcm;

    export type Percentage = `${number}%`;

    export type Number = number;

    export type String = string;

    export type LineNames = never;

    export type Integer = bigint;

    export type CustomIdent = never;

    export type HexColor = never;

    export type Url = never;

    export type Ratio = never;

    export type X = never;

    export type Y = never;

    export type Number11000 = never;

    export type LengthPercentage = DataType.Length | DataType.Percentage;

    export type Rgb = Method.Rgb | Method.Rgb | Method.Rgb | Method.Rgb;

    export type Rgba = Method.Rgba | Method.Rgba | Method.Rgba | Method.Rgba;

    export type Hsl = Method.Hsl | Method.Hsl;

    export type Hsla = Method.Hsla | Method.Hsla;

    export type NamedColor = "transparent" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen";

    export type DeprecatedSystemColor = "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText";

    export type Color = DataType.Rgb | DataType.Rgba | DataType.Hsl | DataType.Hsla | DataType.HexColor | DataType.NamedColor | "currentcolor" | DataType.DeprecatedSystemColor;

    export type OutlineRadius = DataType.Length | DataType.Percentage;

    export type LineWidth = DataType.Length | "thin" | "medium" | "thick";

    export type LineStyle = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";

    export type Gradient = Method.LinearGradient | Method.RepeatingLinearGradient | Method.RadialGradient | Method.RepeatingRadialGradient | Method.ConicGradient;

    export type Image = DataType.Url | Method.Image | Method.ImageSet | Method.Element | Method.Paint | Method.CrossFade | DataType.Gradient;

    export type Attachment = "scroll" | "fixed" | "local";

    export type Box = "border-box" | "padding-box" | "content-box";

    export type CompositeStyle = "clear" | "copy" | "source-over" | "source-in" | "source-out" | "source-atop" | "destination-over" | "destination-in" | "destination-out" | "destination-atop" | "xor";

    export type MaskSource = DataType.Url;

    export type MaskReference = "none" | DataType.Image | DataType.MaskSource;

    export type Position = (("left" | "center" | "right") | ("top" | "center" | "bottom") | `${"left" | "center" | "right"} ${"top" | "center" | "bottom"}`) | `${"left" | "center" | "right" | DataType.LengthPercentage}${"" | ` ${"top" | "center" | "bottom" | DataType.LengthPercentage}`}` | (`${`${"left" | "right"} ${DataType.LengthPercentage}`} ${`${"top" | "bottom"} ${DataType.LengthPercentage}`}`);

    export type RepeatStyle = "repeat-x" | "repeat-y" | (("repeat" | "space" | "round" | "no-repeat") | `${"repeat" | "space" | "round" | "no-repeat"} ${"repeat" | "space" | "round" | "no-repeat"}`);

    export type BgSize = ((DataType.LengthPercentage | "auto") | `${DataType.LengthPercentage | "auto"} ${DataType.LengthPercentage | "auto"}`) | "cover" | "contain";

    export type BaselinePosition = `${"first" | "last"} ${"baseline"}`;

    export type ContentDistribution = "space-between" | "space-around" | "space-evenly" | "stretch";

    export type OverflowPosition = "unsafe" | "safe";

    export type ContentPosition = "center" | "start" | "end" | "flex-start" | "flex-end";

    export type SelfPosition = "center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end";

    export type CubicBezierTimingFunction = "ease" | "ease-in" | "ease-out" | "ease-in-out" | Method.CubicBezier;

    export type StepTimingFunction = "step-start" | "step-end" | Method.Steps;

    export type TimingFunction = "linear" | DataType.CubicBezierTimingFunction | DataType.StepTimingFunction;

    export type SingleAnimationIterationCount = "infinite" | DataType.Number;

    export type SingleAnimationDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";

    export type SingleAnimationFillMode = "none" | "forwards" | "backwards" | "both";

    export type SingleAnimationPlayState = "running" | "paused";

    export type KeyframesName = DataType.CustomIdent | DataType.String;

    export type SingleAnimation = DataType.Time | DataType.TimingFunction | DataType.Time | DataType.SingleAnimationIterationCount | DataType.SingleAnimationDirection | DataType.SingleAnimationFillMode | DataType.SingleAnimationPlayState | ("none" | DataType.KeyframesName) | `${DataType.Time} ${DataType.TimingFunction}` | `${DataType.Time} ${DataType.Time}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount}` | `${DataType.Time} ${DataType.SingleAnimationDirection}` | `${DataType.Time} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount}` | `${DataType.TimingFunction} ${DataType.SingleAnimationDirection}` | `${DataType.TimingFunction} ${DataType.SingleAnimationFillMode}` | `${DataType.TimingFunction} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount}` | `${DataType.Time} ${DataType.SingleAnimationDirection}` | `${DataType.Time} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState}` | `${DataType.SingleAnimationIterationCount} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationDirection}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationDirection}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.Time} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationFillMode}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.Time} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time} ${DataType.SingleAnimationIterationCount} ${DataType.SingleAnimationDirection} ${DataType.SingleAnimationFillMode} ${DataType.SingleAnimationPlayState} ${"none" | DataType.KeyframesName}`;

    export type CompatAuto = "searchfield" | "textarea" | "push-button" | "slider-horizontal" | "checkbox" | "radio" | "square-button" | "menulist" | "listbox" | "meter" | "progress-bar" | "button";

    export type FilterFunction = Method.Blur | Method.Brightness | Method.Contrast | Method.DropShadow | Method.Grayscale | Method.HueRotate | Method.Invert | Method.Opacity | Method.Saturate | Method.Sepia;

    export type FilterFunctionList = (DataType.FilterFunction | DataType.Url) | `${DataType.FilterFunction | DataType.Url} ${DataType.FilterFunction | DataType.Url}` | `${DataType.FilterFunction | DataType.Url} ${DataType.FilterFunction | DataType.Url} ${DataType.FilterFunction | DataType.Url}`;

    export type BlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";

    export type BgImage = "none" | DataType.Image;

    export type BgPosition = ("left" | "center" | "right" | "top" | "bottom" | DataType.LengthPercentage) | `${"left" | "center" | "right" | DataType.LengthPercentage} ${"top" | "center" | "bottom" | DataType.LengthPercentage}` | (`${"center" | `${"left" | "right"}${"" | ` ${DataType.LengthPercentage}`}`} ${"center" | `${"top" | "bottom"}${"" | ` ${DataType.LengthPercentage}`}`}`);

    export type NumberPercentage = DataType.Number | DataType.Percentage;

    export type Shadow = `${"inset"} ${DataType.Length} ${DataType.Color}`;

    export type ClipSource = DataType.Url;

    export type BasicShape = Method.Inset | Method.Circle | Method.Ellipse | Method.Polygon | Method.Path;

    export type ShapeBox = DataType.Box | "margin-box";

    export type GeometryBox = DataType.ShapeBox | "fill-box" | "stroke-box" | "view-box";

    export type ContentReplacement = DataType.Image;

    export type Quote = "open-quote" | "close-quote" | "no-open-quote" | "no-close-quote";

    export type Target = Method.TargetCounter | Method.TargetCounters | Method.TargetText;

    export type ContentList = (DataType.String | "contents" | DataType.Image | DataType.Quote | DataType.Target | Method.Leader) | `${DataType.String | "contents" | DataType.Image | DataType.Quote | DataType.Target | Method.Leader} ${DataType.String | "contents" | DataType.Image | DataType.Quote | DataType.Target | Method.Leader}` | `${DataType.String | "contents" | DataType.Image | DataType.Quote | DataType.Target | Method.Leader} ${DataType.String | "contents" | DataType.Image | DataType.Quote | DataType.Target | Method.Leader} ${DataType.String | "contents" | DataType.Image | DataType.Quote | DataType.Target | Method.Leader}`;

    export type DisplayOutside = "block" | "inline" | "run-in";

    export type DisplayInside = "flow" | "flow-root" | "table" | "flex" | "grid" | "ruby";

    export type DisplayListitem = `${DataType.DisplayOutside} ${("flow" | "flow-root") | ""} ${"list-item"}`;

    export type DisplayInternal = "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-cell" | "table-column-group" | "table-column" | "table-caption" | "ruby-base" | "ruby-text" | "ruby-base-container" | "ruby-text-container";

    export type DisplayBox = "contents" | "none";

    export type DisplayLegacy = "inline-block" | "inline-list-item" | "inline-table" | "inline-flex" | "inline-grid";

    export type FontVariantCss21 = "normal" | "small-caps";

    export type FontWeightAbsolute = "normal" | "bold" | DataType.Number11000;

    export type FontStretchAbsolute = "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | DataType.Percentage;

    export type AbsoluteSize = "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large" | "xxx-large";

    export type RelativeSize = "larger" | "smaller";

    export type FamilyName = DataType.String | DataType.CustomIdent;

    export type GenericFamily = "serif" | "sans-serif" | "cursive" | "fantasy" | "monospace";

    export type FeatureTagValue = `${DataType.String}${"" | ` ${DataType.Integer | "on" | "off"}`}`;

    export type EastAsianVariantValues = "jis78" | "jis83" | "jis90" | "jis04" | "simplified" | "traditional";

    export type EastAsianWidthValues = "full-width" | "proportional-width";

    export type CommonLigValues = "common-ligatures" | "no-common-ligatures";

    export type DiscretionaryLigValues = "discretionary-ligatures" | "no-discretionary-ligatures";

    export type HistoricalLigValues = "historical-ligatures" | "no-historical-ligatures";

    export type ContextualAltValues = "contextual" | "no-contextual";

    export type NumericFigureValues = "lining-nums" | "oldstyle-nums";

    export type NumericSpacingValues = "proportional-nums" | "tabular-nums";

    export type NumericFractionValues = "diagonal-fractions" | "stacked-fractions";

    export type TrackBreadth = DataType.LengthPercentage | Property.Flex | "min-content" | "max-content" | "auto";

    export type TrackSize = DataType.TrackBreadth | Method.Minmax | Method.FitContent;

    export type TrackList = `${`${DataType.LineNames} ${DataType.TrackSize | Method.TrackRepeat}` | `${`${DataType.LineNames} ${DataType.TrackSize | Method.TrackRepeat}`} ${`${DataType.LineNames} ${DataType.TrackSize | Method.TrackRepeat}`}` | `${`${DataType.LineNames} ${DataType.TrackSize | Method.TrackRepeat}`} ${`${DataType.LineNames} ${DataType.TrackSize | Method.TrackRepeat}`} ${`${DataType.LineNames} ${DataType.TrackSize | Method.TrackRepeat}`}`}${"" | ` ${DataType.LineNames}`}`;

    export type FixedBreadth = DataType.LengthPercentage;

    export type FixedSize = DataType.FixedBreadth | Method.Minmax | Method.Minmax;

    export type AutoTrackList = `${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}` | `${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}`} ${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}`}` | `${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}`} ${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}`} ${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}`}`}${"" | ` ${DataType.LineNames}`} ${Method.AutoRepeat} ${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}` | `${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}`} ${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}`}` | `${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}`} ${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}`} ${`${DataType.LineNames} ${DataType.FixedSize | Method.FixedRepeat}`}`}${"" | ` ${DataType.LineNames}`}`;

    export type ExplicitTrackList = `${`${DataType.LineNames} ${DataType.TrackSize}` | `${`${DataType.LineNames} ${DataType.TrackSize}`} ${`${DataType.LineNames} ${DataType.TrackSize}`}` | `${`${DataType.LineNames} ${DataType.TrackSize}`} ${`${DataType.LineNames} ${DataType.TrackSize}`} ${`${DataType.LineNames} ${DataType.TrackSize}`}`}${"" | ` ${DataType.LineNames}`}`;

    export type GridLine = "auto" | DataType.CustomIdent | (`${DataType.Integer} ${DataType.CustomIdent}`) | (`${"span"} ${DataType.Integer | DataType.CustomIdent | `${DataType.Integer} ${DataType.CustomIdent}`}`);

    export type CounterStyleName = DataType.CustomIdent;

    export type CounterStyle = DataType.CounterStyleName | Method.Symbols;

    export type CompositingOperator = "add" | "subtract" | "intersect" | "exclude";

    export type MaskingMode = "alpha" | "luminance" | "match-source";

    export type AlphaValue = DataType.Number | DataType.Percentage;

    export type ShadowT = `${DataType.Length} ${DataType.Color}`;

    export type TransformFunction = Method.Matrix | Method.Translate | Method.TranslateX | Method.TranslateY | Property.Scale | Method.ScaleX | Method.ScaleY | Property.Rotate | Method.Skew | Method.SkewX | Method.SkewY | Method.Matrix3D | Method.Translate3D | Method.TranslateZ | Method.Scale3D | Method.ScaleZ | Method.Rotate3D | Method.RotateX | Method.RotateY | Method.RotateZ | Property.Perspective;

    export type TransformList = DataType.TransformFunction;

    export type SingleTransitionProperty = "all" | DataType.CustomIdent;

    export type SingleTransition = ("none" | DataType.SingleTransitionProperty) | DataType.Time | DataType.TimingFunction | DataType.Time | `${"none" | DataType.SingleTransitionProperty} ${DataType.Time}` | `${"none" | DataType.SingleTransitionProperty} ${DataType.TimingFunction}` | `${"none" | DataType.SingleTransitionProperty} ${DataType.Time}` | `${DataType.Time} ${DataType.TimingFunction}` | `${DataType.Time} ${DataType.Time}` | `${DataType.TimingFunction} ${DataType.Time}` | `${"none" | DataType.SingleTransitionProperty} ${DataType.Time} ${DataType.TimingFunction}` | `${"none" | DataType.SingleTransitionProperty} ${DataType.Time} ${DataType.Time}` | `${"none" | DataType.SingleTransitionProperty} ${DataType.TimingFunction} ${DataType.Time}` | `${DataType.Time} ${DataType.TimingFunction} ${DataType.Time}` | `${"none" | DataType.SingleTransitionProperty} ${DataType.Time} ${DataType.TimingFunction} ${DataType.Time}`;

    export type AnimateableFeature = "scroll-position" | "contents" | DataType.CustomIdent;

}namespace Method {
    export type SnapInterval = `snapInterval(${string})`;

    export type SnapList = `snapList(${string})`;

    export type Rgb = `rgb(${string})`;

    export type Rgba = `rgba(${string})`;

    export type Hsl = `hsl(${string})`;

    export type Hsla = `hsla(${string})`;

    export type Rect = `rect(${string})`;

    export type Shape = Method.Rect;

    export type Image = `image(${string})`;

    export type ImageSet = `image-set(${string})`;

    export type Element = `element(${string})`;

    export type Paint = `paint(${string})`;

    export type CrossFade = `cross-fade(${string})`;

    export type LinearGradient = `linear-gradient(${string})`;

    export type RepeatingLinearGradient = `repeating-linear-gradient(${string})`;

    export type RadialGradient = `radial-gradient(${string})`;

    export type RepeatingRadialGradient = `repeating-radial-gradient(${string})`;

    export type ConicGradient = `conic-gradient(${string})`;

    export type CubicBezier = `cubic-bezier(${string})`;

    export type Steps = `steps(${string})`;

    export type Blur = `blur(${string})`;

    export type Brightness = `brightness(${string})`;

    export type Contrast = `contrast(${string})`;

    export type DropShadow = `drop-shadow(${string})`;

    export type Grayscale = `grayscale(${string})`;

    export type HueRotate = `hue-rotate(${string})`;

    export type Invert = `invert(${string})`;

    export type Opacity = `opacity(${string})`;

    export type Saturate = `saturate(${string})`;

    export type Sepia = `sepia(${string})`;

    export type FitContent = `fit-content(${string})`;

    export type Inset = `inset(${string})`;

    export type Circle = `circle(${string})`;

    export type Ellipse = `ellipse(${string})`;

    export type Polygon = `polygon(${string})`;

    export type Path = `path(${string})`;

    export type TargetCounter = `target-counter(${string})`;

    export type TargetCounters = `target-counters(${string})`;

    export type TargetText = `target-text(${string})`;

    export type Leader = `leader(${string})`;

    export type Stylistic = `stylistic(${string})`;

    export type Styleset = `styleset(${string})`;

    export type CharacterVariant = `character-variant(${string})`;

    export type Swash = `swash(${string})`;

    export type Ornaments = `ornaments(${string})`;

    export type Annotation = `annotation(${string})`;

    export type Minmax = `minmax(${string})`;

    export type Repeat = `repeat(${string})`;

    export type TrackRepeat = Method.Repeat;

    export type FixedRepeat = Method.Repeat;

    export type AutoRepeat = Method.Repeat;

    export type Symbols = `symbols(${string})`;

    export type Ray = `ray(${string})`;

    export type Matrix = `matrix(${string})`;

    export type Translate = `translate(${string})`;

    export type TranslateX = `translateX(${string})`;

    export type TranslateY = `translateY(${string})`;

    export type ScaleX = `scaleX(${string})`;

    export type ScaleY = `scaleY(${string})`;

    export type Skew = `skew(${string})`;

    export type SkewX = `skewX(${string})`;

    export type SkewY = `skewY(${string})`;

    export type Matrix3D = `matrix3d(${string})`;

    export type Translate3D = `translate3d(${string})`;

    export type TranslateZ = `translateZ(${string})`;

    export type Scale3D = `scale3d(${string})`;

    export type ScaleZ = `scaleZ(${string})`;

    export type Rotate3D = `rotate3d(${string})`;

    export type RotateX = `rotateX(${string})`;

    export type RotateY = `rotateY(${string})`;

    export type RotateZ = `rotateZ(${string})`;

}export namespace Property {
    export type MsAccelerator = "false" | "true";

    export type MsBlockProgression = "tb" | "rl" | "bt" | "lr";

    export type MsContentZoomChaining = "none" | "chained";

    export type MsContentZooming = "none" | "zoom";

    export type MsContentZoomLimitMin = DataType.Percentage;

    export type MsContentZoomLimitMax = DataType.Percentage;

    export type MsContentZoomLimit = `${Property.MsContentZoomLimitMin} ${Property.MsContentZoomLimitMax}`;

    export type MsContentZoomSnapType = "none" | "proximity" | "mandatory";

    export type MsContentZoomSnapPoints = Method.SnapInterval | Method.SnapList;

    export type MsContentZoomSnap = Property.MsContentZoomSnapType | Property.MsContentZoomSnapPoints | `${Property.MsContentZoomSnapType} ${Property.MsContentZoomSnapPoints}`;

    export type MsFilter = DataType.String;

    export type MsFlowFrom = ("none" | DataType.CustomIdent) | `${"none" | DataType.CustomIdent}, ${"none" | DataType.CustomIdent}` | `${"none" | DataType.CustomIdent}, ${"none" | DataType.CustomIdent}, ${"none" | DataType.CustomIdent}`;

    export type MsFlowInto = ("none" | DataType.CustomIdent) | `${"none" | DataType.CustomIdent}, ${"none" | DataType.CustomIdent}` | `${"none" | DataType.CustomIdent}, ${"none" | DataType.CustomIdent}, ${"none" | DataType.CustomIdent}`;

    export type MsHighContrastAdjust = "auto" | "none";

    export type MsHyphenateLimitChars = "auto" | DataType.Integer;

    export type MsHyphenateLimitLines = "no-limit" | DataType.Integer;

    export type MsHyphenateLimitZone = DataType.Percentage | DataType.Length;

    export type MsImeAlign = "auto" | "after";

    export type MsOverflowStyle = "auto" | "none" | "scrollbar" | "-ms-autohiding-scrollbar";

    export type MsScrollbar3DlightColor = DataType.Color;

    export type MsScrollbarArrowColor = DataType.Color;

    export type MsScrollbarBaseColor = DataType.Color;

    export type MsScrollbarDarkshadowColor = DataType.Color;

    export type MsScrollbarFaceColor = DataType.Color;

    export type MsScrollbarHighlightColor = DataType.Color;

    export type MsScrollbarShadowColor = DataType.Color;

    export type MsScrollbarTrackColor = DataType.Color;

    export type MsScrollChaining = "chained" | "none";

    export type MsScrollLimitXMin = DataType.Length;

    export type MsScrollLimitYMin = DataType.Length;

    export type MsScrollLimitXMax = "auto" | DataType.Length;

    export type MsScrollLimitYMax = "auto" | DataType.Length;

    export type MsScrollLimit = `${Property.MsScrollLimitXMin} ${Property.MsScrollLimitYMin} ${Property.MsScrollLimitXMax} ${Property.MsScrollLimitYMax}`;

    export type MsScrollRails = "none" | "railed";

    export type MsScrollSnapPointsX = Method.SnapInterval | Method.SnapList;

    export type MsScrollSnapPointsY = Method.SnapInterval | Method.SnapList;

    export type MsScrollSnapType = "none" | "proximity" | "mandatory";

    export type MsScrollSnapX = `${Property.MsScrollSnapType} ${Property.MsScrollSnapPointsX}`;

    export type MsScrollSnapY = `${Property.MsScrollSnapType} ${Property.MsScrollSnapPointsY}`;

    export type MsScrollTranslation = "none" | "vertical-to-horizontal";

    export type MsTextAutospace = "none" | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space";

    export type MsTouchSelect = "grippers" | "none";

    export type MsUserSelect = "none" | "element" | "text";

    export type MsWrapFlow = "auto" | "both" | "start" | "end" | "maximum" | "clear";

    export type MsWrapMargin = DataType.Length;

    export type MsWrapThrough = "wrap" | "none";

    export type MozAppearance = "none" | "button" | "button-arrow-down" | "button-arrow-next" | "button-arrow-previous" | "button-arrow-up" | "button-bevel" | "button-focus" | "caret" | "checkbox" | "checkbox-container" | "checkbox-label" | "checkmenuitem" | "dualbutton" | "groupbox" | "listbox" | "listitem" | "menuarrow" | "menubar" | "menucheckbox" | "menuimage" | "menuitem" | "menuitemtext" | "menulist" | "menulist-button" | "menulist-text" | "menulist-textfield" | "menupopup" | "menuradio" | "menuseparator" | "meterbar" | "meterchunk" | "progressbar" | "progressbar-vertical" | "progresschunk" | "progresschunk-vertical" | "radio" | "radio-container" | "radio-label" | "radiomenuitem" | "range" | "range-thumb" | "resizer" | "resizerpanel" | "scale-horizontal" | "scalethumbend" | "scalethumb-horizontal" | "scalethumbstart" | "scalethumbtick" | "scalethumb-vertical" | "scale-vertical" | "scrollbarbutton-down" | "scrollbarbutton-left" | "scrollbarbutton-right" | "scrollbarbutton-up" | "scrollbarthumb-horizontal" | "scrollbarthumb-vertical" | "scrollbartrack-horizontal" | "scrollbartrack-vertical" | "searchfield" | "separator" | "sheet" | "spinner" | "spinner-downbutton" | "spinner-textfield" | "spinner-upbutton" | "splitter" | "statusbar" | "statusbarpanel" | "tab" | "tabpanel" | "tabpanels" | "tab-scroll-arrow-back" | "tab-scroll-arrow-forward" | "textfield" | "textfield-multiline" | "toolbar" | "toolbarbutton" | "toolbarbutton-dropdown" | "toolbargripper" | "toolbox" | "tooltip" | "treeheader" | "treeheadercell" | "treeheadersortarrow" | "treeitem" | "treeline" | "treetwisty" | "treetwistyopen" | "treeview" | "-moz-mac-unified-toolbar" | "-moz-win-borderless-glass" | "-moz-win-browsertabbar-toolbox" | "-moz-win-communicationstext" | "-moz-win-communications-toolbox" | "-moz-win-exclude-glass" | "-moz-win-glass" | "-moz-win-mediatext" | "-moz-win-media-toolbox" | "-moz-window-button-box" | "-moz-window-button-box-maximized" | "-moz-window-button-close" | "-moz-window-button-maximize" | "-moz-window-button-minimize" | "-moz-window-button-restore" | "-moz-window-frame-bottom" | "-moz-window-frame-left" | "-moz-window-frame-right" | "-moz-window-titlebar" | "-moz-window-titlebar-maximized";

    export type MozBinding = DataType.Url | "none";

    export type MozBorderBottomColors = DataType.Color | "none";

    export type MozBorderLeftColors = DataType.Color | "none";

    export type MozBorderRightColors = DataType.Color | "none";

    export type MozBorderTopColors = DataType.Color | "none";

    export type MozContextProperties = "none" | (("fill" | "fill-opacity" | "stroke" | "stroke-opacity") | `${"fill" | "fill-opacity" | "stroke" | "stroke-opacity"}, ${"fill" | "fill-opacity" | "stroke" | "stroke-opacity"}` | `${"fill" | "fill-opacity" | "stroke" | "stroke-opacity"}, ${"fill" | "fill-opacity" | "stroke" | "stroke-opacity"}, ${"fill" | "fill-opacity" | "stroke" | "stroke-opacity"}`);

    export type MozFloatEdge = "border-box" | "content-box" | "margin-box" | "padding-box";

    export type MozForceBrokenImageIcon = DataType.Integer;

    export type MozImageRegion = Method.Shape | "auto";

    export type MozOrient = "inline" | "block" | "horizontal" | "vertical";

    export type MozOutlineRadius = `${DataType.OutlineRadius}${"" | ` ${`${"/"} ${DataType.OutlineRadius}`}`}`;

    export type MozOutlineRadiusBottomleft = DataType.OutlineRadius;

    export type MozOutlineRadiusBottomright = DataType.OutlineRadius;

    export type MozOutlineRadiusTopleft = DataType.OutlineRadius;

    export type MozOutlineRadiusTopright = DataType.OutlineRadius;

    export type MozStackSizing = "ignore" | "stretch-to-fit";

    export type MozTextBlink = "none" | "blink";

    export type MozUserFocus = "ignore" | "normal" | "select-after" | "select-before" | "select-menu" | "select-same" | "select-all" | "none";

    export type MozUserInput = "auto" | "none" | "enabled" | "disabled";

    export type MozUserModify = "read-only" | "read-write" | "write-only";

    export type MozWindowDragging = "drag" | "no-drag";

    export type MozWindowShadow = "default" | "menu" | "tooltip" | "sheet" | "none";

    export type WebkitAppearance = "none" | "button" | "button-bevel" | "caret" | "checkbox" | "default-button" | "inner-spin-button" | "listbox" | "listitem" | "media-controls-background" | "media-controls-fullscreen-background" | "media-current-time-display" | "media-enter-fullscreen-button" | "media-exit-fullscreen-button" | "media-fullscreen-button" | "media-mute-button" | "media-overlay-play-button" | "media-play-button" | "media-seek-back-button" | "media-seek-forward-button" | "media-slider" | "media-sliderthumb" | "media-time-remaining-display" | "media-toggle-closed-captions-button" | "media-volume-slider" | "media-volume-slider-container" | "media-volume-sliderthumb" | "menulist" | "menulist-button" | "menulist-text" | "menulist-textfield" | "meter" | "progress-bar" | "progress-bar-value" | "push-button" | "radio" | "searchfield" | "searchfield-cancel-button" | "searchfield-decoration" | "searchfield-results-button" | "searchfield-results-decoration" | "slider-horizontal" | "slider-vertical" | "sliderthumb-horizontal" | "sliderthumb-vertical" | "square-button" | "textarea" | "textfield";

    export type BorderWidth = DataType.LineWidth;

    export type BorderStyle = DataType.LineStyle;

    export type WebkitBorderBefore = Property.BorderWidth | Property.BorderStyle | DataType.Color | `${Property.BorderWidth} ${Property.BorderStyle}` | `${Property.BorderWidth} ${DataType.Color}` | `${Property.BorderStyle} ${DataType.Color}` | `${Property.BorderWidth} ${Property.BorderStyle} ${DataType.Color}`;

    export type WebkitBorderBeforeColor = DataType.Color;

    export type WebkitBorderBeforeStyle = Property.BorderStyle;

    export type WebkitBorderBeforeWidth = Property.BorderWidth;

    export type WebkitBoxReflect = `${"above" | "below" | "right" | "left"}${"" | ` ${DataType.Length}`}${"" | ` ${DataType.Image}`}`;

    export type WebkitLineClamp = "none" | DataType.Integer;

    export type WebkitMaskAttachment = DataType.Attachment;

    export type WebkitMaskClip = (DataType.Box | "border" | "padding" | "content" | "text") | `${DataType.Box | "border" | "padding" | "content" | "text"}, ${DataType.Box | "border" | "padding" | "content" | "text"}` | `${DataType.Box | "border" | "padding" | "content" | "text"}, ${DataType.Box | "border" | "padding" | "content" | "text"}, ${DataType.Box | "border" | "padding" | "content" | "text"}`;

    export type WebkitMaskComposite = DataType.CompositeStyle;

    export type WebkitMaskImage = DataType.MaskReference;

    export type WebkitMaskOrigin = (DataType.Box | "border" | "padding" | "content") | `${DataType.Box | "border" | "padding" | "content"}, ${DataType.Box | "border" | "padding" | "content"}` | `${DataType.Box | "border" | "padding" | "content"}, ${DataType.Box | "border" | "padding" | "content"}, ${DataType.Box | "border" | "padding" | "content"}`;

    export type WebkitMaskPosition = DataType.Position;

    export type WebkitMaskPositionX = (DataType.LengthPercentage | "left" | "center" | "right") | `${DataType.LengthPercentage | "left" | "center" | "right"}, ${DataType.LengthPercentage | "left" | "center" | "right"}` | `${DataType.LengthPercentage | "left" | "center" | "right"}, ${DataType.LengthPercentage | "left" | "center" | "right"}, ${DataType.LengthPercentage | "left" | "center" | "right"}`;

    export type WebkitMaskPositionY = (DataType.LengthPercentage | "top" | "center" | "bottom") | `${DataType.LengthPercentage | "top" | "center" | "bottom"}, ${DataType.LengthPercentage | "top" | "center" | "bottom"}` | `${DataType.LengthPercentage | "top" | "center" | "bottom"}, ${DataType.LengthPercentage | "top" | "center" | "bottom"}, ${DataType.LengthPercentage | "top" | "center" | "bottom"}`;

    export type WebkitMaskRepeat = DataType.RepeatStyle;

    export type WebkitMaskRepeatX = "repeat" | "no-repeat" | "space" | "round";

    export type WebkitMaskRepeatY = "repeat" | "no-repeat" | "space" | "round";

    export type WebkitMaskSize = DataType.BgSize;

    export type WebkitOverflowScrolling = "auto" | "touch";

    export type WebkitTapHighlightColor = DataType.Color;

    export type WebkitTextFillColor = DataType.Color;

    export type WebkitTextStroke = DataType.Length | DataType.Color | `${DataType.Length} ${DataType.Color}`;

    export type WebkitTextStrokeColor = DataType.Color;

    export type WebkitTextStrokeWidth = DataType.Length;

    export type WebkitTouchCallout = "default" | "none";

    export type WebkitUserModify = "read-only" | "read-write" | "read-write-plaintext-only";

    export type AlignContent = "normal" | DataType.BaselinePosition | DataType.ContentDistribution | `${DataType.OverflowPosition} ${DataType.ContentPosition}`;

    export type AlignItems = "normal" | "stretch" | DataType.BaselinePosition | `${DataType.OverflowPosition} ${DataType.SelfPosition}`;

    export type AlignSelf = "auto" | "normal" | "stretch" | DataType.BaselinePosition | `${DataType.OverflowPosition} ${DataType.SelfPosition}`;

    export type All = "initial" | "inherit" | "unset" | "revert";

    export type Animation = DataType.SingleAnimation;

    export type AnimationDelay = DataType.Time;

    export type AnimationDirection = DataType.SingleAnimationDirection;

    export type AnimationDuration = DataType.Time;

    export type AnimationFillMode = DataType.SingleAnimationFillMode;

    export type AnimationIterationCount = DataType.SingleAnimationIterationCount;

    export type AnimationName = ("none" | DataType.KeyframesName) | `${"none" | DataType.KeyframesName}, ${"none" | DataType.KeyframesName}` | `${"none" | DataType.KeyframesName}, ${"none" | DataType.KeyframesName}, ${"none" | DataType.KeyframesName}`;

    export type AnimationPlayState = DataType.SingleAnimationPlayState;

    export type AnimationTimingFunction = DataType.TimingFunction;

    export type Appearance = "none" | "auto" | "textfield" | "menulist-button" | DataType.CompatAuto;

    export type AspectRatio = "auto" | DataType.Ratio;

    export type Azimuth = DataType.Angle | (("left-side" | "far-left" | "left" | "center-left" | "center" | "center-right" | "right" | "far-right" | "right-side") | "behind" | `${"left-side" | "far-left" | "left" | "center-left" | "center" | "center-right" | "right" | "far-right" | "right-side"} ${"behind"}`) | "leftwards" | "rightwards";

    export type BackdropFilter = "none" | DataType.FilterFunctionList;

    export type BackfaceVisibility = "visible" | "hidden";

    export type BackgroundAttachment = DataType.Attachment;

    export type BackgroundBlendMode = DataType.BlendMode;

    export type BackgroundClip = DataType.Box;

    export type BackgroundColor = DataType.Color;

    export type BackgroundImage = DataType.BgImage;

    export type BackgroundOrigin = DataType.Box;

    export type BackgroundPosition = DataType.BgPosition;

    export type BackgroundPositionX = ("center" | `${"left" | "right" | "x-start" | "x-end"}${"" | ` ${DataType.LengthPercentage}`}`) | `${"center" | `${"left" | "right" | "x-start" | "x-end"}${"" | ` ${DataType.LengthPercentage}`}`}, ${"center" | `${"left" | "right" | "x-start" | "x-end"}${"" | ` ${DataType.LengthPercentage}`}`}` | `${"center" | `${"left" | "right" | "x-start" | "x-end"}${"" | ` ${DataType.LengthPercentage}`}`}, ${"center" | `${"left" | "right" | "x-start" | "x-end"}${"" | ` ${DataType.LengthPercentage}`}`}, ${"center" | `${"left" | "right" | "x-start" | "x-end"}${"" | ` ${DataType.LengthPercentage}`}`}`;

    export type BackgroundPositionY = ("center" | `${"top" | "bottom" | "y-start" | "y-end"}${"" | ` ${DataType.LengthPercentage}`}`) | `${"center" | `${"top" | "bottom" | "y-start" | "y-end"}${"" | ` ${DataType.LengthPercentage}`}`}, ${"center" | `${"top" | "bottom" | "y-start" | "y-end"}${"" | ` ${DataType.LengthPercentage}`}`}` | `${"center" | `${"top" | "bottom" | "y-start" | "y-end"}${"" | ` ${DataType.LengthPercentage}`}`}, ${"center" | `${"top" | "bottom" | "y-start" | "y-end"}${"" | ` ${DataType.LengthPercentage}`}`}, ${"center" | `${"top" | "bottom" | "y-start" | "y-end"}${"" | ` ${DataType.LengthPercentage}`}`}`;

    export type BackgroundRepeat = DataType.RepeatStyle;

    export type BackgroundSize = DataType.BgSize;

    export type BlockOverflow = "clip" | "ellipsis" | DataType.String;

    export type Width = "auto" | DataType.Length | DataType.Percentage | "min-content" | "max-content" | Method.FitContent;

    export type BlockSize = Property.Width;

    export type Border = DataType.LineWidth | DataType.LineStyle | DataType.Color | `${DataType.LineWidth} ${DataType.LineStyle}` | `${DataType.LineWidth} ${DataType.Color}` | `${DataType.LineStyle} ${DataType.Color}` | `${DataType.LineWidth} ${DataType.LineStyle} ${DataType.Color}`;

    export type BorderTopWidth = DataType.LineWidth;

    export type BorderTopStyle = DataType.LineStyle;

    export type BorderBlock = Property.BorderTopWidth | Property.BorderTopStyle | DataType.Color | `${Property.BorderTopWidth} ${Property.BorderTopStyle}` | `${Property.BorderTopWidth} ${DataType.Color}` | `${Property.BorderTopStyle} ${DataType.Color}` | `${Property.BorderTopWidth} ${Property.BorderTopStyle} ${DataType.Color}`;

    export type BorderTopColor = DataType.Color;

    export type BorderBlockColor = Property.BorderTopColor;

    export type BorderBlockStyle = Property.BorderTopStyle;

    export type BorderBlockWidth = Property.BorderTopWidth;

    export type BorderBlockEnd = Property.BorderTopWidth | Property.BorderTopStyle | DataType.Color | `${Property.BorderTopWidth} ${Property.BorderTopStyle}` | `${Property.BorderTopWidth} ${DataType.Color}` | `${Property.BorderTopStyle} ${DataType.Color}` | `${Property.BorderTopWidth} ${Property.BorderTopStyle} ${DataType.Color}`;

    export type BorderBlockEndColor = Property.BorderTopColor;

    export type BorderBlockEndStyle = Property.BorderTopStyle;

    export type BorderBlockEndWidth = Property.BorderTopWidth;

    export type BorderBlockStart = Property.BorderTopWidth | Property.BorderTopStyle | DataType.Color | `${Property.BorderTopWidth} ${Property.BorderTopStyle}` | `${Property.BorderTopWidth} ${DataType.Color}` | `${Property.BorderTopStyle} ${DataType.Color}` | `${Property.BorderTopWidth} ${Property.BorderTopStyle} ${DataType.Color}`;

    export type BorderBlockStartColor = Property.BorderTopColor;

    export type BorderBlockStartStyle = Property.BorderTopStyle;

    export type BorderBlockStartWidth = Property.BorderTopWidth;

    export type BorderBottom = DataType.LineWidth | DataType.LineStyle | DataType.Color | `${DataType.LineWidth} ${DataType.LineStyle}` | `${DataType.LineWidth} ${DataType.Color}` | `${DataType.LineStyle} ${DataType.Color}` | `${DataType.LineWidth} ${DataType.LineStyle} ${DataType.Color}`;

    export type BorderBottomColor = Property.BorderTopColor;

    export type BorderBottomLeftRadius = DataType.LengthPercentage;

    export type BorderBottomRightRadius = DataType.LengthPercentage;

    export type BorderBottomStyle = DataType.LineStyle;

    export type BorderBottomWidth = DataType.LineWidth;

    export type BorderCollapse = "collapse" | "separate";

    export type BorderColor = DataType.Color;

    export type BorderEndEndRadius = DataType.LengthPercentage;

    export type BorderEndStartRadius = DataType.LengthPercentage;

    export type BorderImageSource = "none" | DataType.Image;

    export type BorderImageSlice = `${DataType.NumberPercentage} ${"fill"}`;

    export type BorderImageWidth = (DataType.LengthPercentage | DataType.Number | "auto") | `${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"}` | `${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"}` | `${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"}`;

    export type BorderImageOutset = (DataType.Length | DataType.Number) | `${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number}` | `${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number}` | `${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number}`;

    export type BorderImageRepeat = ("stretch" | "repeat" | "round" | "space") | `${"stretch" | "repeat" | "round" | "space"} ${"stretch" | "repeat" | "round" | "space"}`;

    export type BorderImage = Property.BorderImageSource | `${Property.BorderImageSlice}${"" | ` ${`${"/"} ${Property.BorderImageWidth}` | `${"/"}${"" | ` ${Property.BorderImageWidth}`} ${"/"} ${Property.BorderImageOutset}`}`}` | Property.BorderImageRepeat | `${Property.BorderImageSource} ${`${Property.BorderImageSlice} ${`${"/"} ${Property.BorderImageWidth}` | `${"/"} ${Property.BorderImageWidth} ${"/"} ${Property.BorderImageOutset}`}`}` | `${Property.BorderImageSource} ${Property.BorderImageRepeat}` | `${`${Property.BorderImageSlice} ${`${"/"} ${Property.BorderImageWidth}` | `${"/"} ${Property.BorderImageWidth} ${"/"} ${Property.BorderImageOutset}`}`} ${Property.BorderImageRepeat}` | `${Property.BorderImageSource} ${`${Property.BorderImageSlice} ${`${"/"} ${Property.BorderImageWidth}` | `${"/"} ${Property.BorderImageWidth} ${"/"} ${Property.BorderImageOutset}`}`} ${Property.BorderImageRepeat}`;

    export type BorderInline = Property.BorderTopWidth | Property.BorderTopStyle | DataType.Color | `${Property.BorderTopWidth} ${Property.BorderTopStyle}` | `${Property.BorderTopWidth} ${DataType.Color}` | `${Property.BorderTopStyle} ${DataType.Color}` | `${Property.BorderTopWidth} ${Property.BorderTopStyle} ${DataType.Color}`;

    export type BorderInlineEnd = Property.BorderTopWidth | Property.BorderTopStyle | DataType.Color | `${Property.BorderTopWidth} ${Property.BorderTopStyle}` | `${Property.BorderTopWidth} ${DataType.Color}` | `${Property.BorderTopStyle} ${DataType.Color}` | `${Property.BorderTopWidth} ${Property.BorderTopStyle} ${DataType.Color}`;

    export type BorderInlineColor = Property.BorderTopColor;

    export type BorderInlineStyle = Property.BorderTopStyle;

    export type BorderInlineWidth = Property.BorderTopWidth;

    export type BorderInlineEndColor = Property.BorderTopColor;

    export type BorderInlineEndStyle = Property.BorderTopStyle;

    export type BorderInlineEndWidth = Property.BorderTopWidth;

    export type BorderInlineStart = Property.BorderTopWidth | Property.BorderTopStyle | DataType.Color | `${Property.BorderTopWidth} ${Property.BorderTopStyle}` | `${Property.BorderTopWidth} ${DataType.Color}` | `${Property.BorderTopStyle} ${DataType.Color}` | `${Property.BorderTopWidth} ${Property.BorderTopStyle} ${DataType.Color}`;

    export type BorderInlineStartColor = Property.BorderTopColor;

    export type BorderInlineStartStyle = Property.BorderTopStyle;

    export type BorderInlineStartWidth = Property.BorderTopWidth;

    export type BorderLeft = DataType.LineWidth | DataType.LineStyle | DataType.Color | `${DataType.LineWidth} ${DataType.LineStyle}` | `${DataType.LineWidth} ${DataType.Color}` | `${DataType.LineStyle} ${DataType.Color}` | `${DataType.LineWidth} ${DataType.LineStyle} ${DataType.Color}`;

    export type BorderLeftColor = DataType.Color;

    export type BorderLeftStyle = DataType.LineStyle;

    export type BorderLeftWidth = DataType.LineWidth;

    export type BorderRadius = `${DataType.LengthPercentage}${"" | ` ${`${"/"} ${DataType.LengthPercentage}`}`}`;

    export type BorderRight = DataType.LineWidth | DataType.LineStyle | DataType.Color | `${DataType.LineWidth} ${DataType.LineStyle}` | `${DataType.LineWidth} ${DataType.Color}` | `${DataType.LineStyle} ${DataType.Color}` | `${DataType.LineWidth} ${DataType.LineStyle} ${DataType.Color}`;

    export type BorderRightColor = DataType.Color;

    export type BorderRightStyle = DataType.LineStyle;

    export type BorderRightWidth = DataType.LineWidth;

    export type BorderSpacing = `${DataType.Length}${"" | ` ${DataType.Length}`}`;

    export type BorderStartEndRadius = DataType.LengthPercentage;

    export type BorderStartStartRadius = DataType.LengthPercentage;

    export type BorderTop = DataType.LineWidth | DataType.LineStyle | DataType.Color | `${DataType.LineWidth} ${DataType.LineStyle}` | `${DataType.LineWidth} ${DataType.Color}` | `${DataType.LineStyle} ${DataType.Color}` | `${DataType.LineWidth} ${DataType.LineStyle} ${DataType.Color}`;

    export type BorderTopLeftRadius = DataType.LengthPercentage;

    export type BorderTopRightRadius = DataType.LengthPercentage;

    export type Bottom = DataType.Length | DataType.Percentage | "auto";

    export type BoxAlign = "start" | "center" | "end" | "baseline" | "stretch";

    export type BoxDecorationBreak = "slice" | "clone";

    export type BoxDirection = "normal" | "reverse" | "inherit";

    export type BoxFlex = DataType.Number;

    export type BoxFlexGroup = DataType.Integer;

    export type BoxLines = "single" | "multiple";

    export type BoxOrdinalGroup = DataType.Integer;

    export type BoxOrient = "horizontal" | "vertical" | "inline-axis" | "block-axis" | "inherit";

    export type BoxPack = "start" | "center" | "end" | "justify";

    export type BoxShadow = "none" | DataType.Shadow;

    export type BoxSizing = "content-box" | "border-box";

    export type BreakAfter = "auto" | "avoid" | "always" | "all" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region";

    export type BreakBefore = "auto" | "avoid" | "always" | "all" | "avoid-page" | "page" | "left" | "right" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "region";

    export type BreakInside = "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";

    export type CaptionSide = "top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end";

    export type CaretColor = "auto" | DataType.Color;

    export type Clear = "none" | "left" | "right" | "both" | "inline-start" | "inline-end";

    export type Clip = Method.Shape | "auto";

    export type ClipPath = DataType.ClipSource | (DataType.BasicShape | DataType.GeometryBox | `${DataType.BasicShape} ${DataType.GeometryBox}`) | "none";

    export type Color = DataType.Color;

    export type ColorAdjust = "economy" | "exact";

    export type ColumnCount = DataType.Integer | "auto";

    export type ColumnFill = "auto" | "balance" | "balance-all";

    export type ColumnGap = "normal" | DataType.LengthPercentage;

    export type ColumnRuleWidth = Property.BorderWidth;

    export type ColumnRuleStyle = Property.BorderStyle;

    export type ColumnRuleColor = DataType.Color;

    export type ColumnRule = Property.ColumnRuleWidth | Property.ColumnRuleStyle | Property.ColumnRuleColor | `${Property.ColumnRuleWidth} ${Property.ColumnRuleStyle}` | `${Property.ColumnRuleWidth} ${Property.ColumnRuleColor}` | `${Property.ColumnRuleStyle} ${Property.ColumnRuleColor}` | `${Property.ColumnRuleWidth} ${Property.ColumnRuleStyle} ${Property.ColumnRuleColor}`;

    export type ColumnSpan = "none" | "all";

    export type ColumnWidth = DataType.Length | "auto";

    export type Columns = Property.ColumnWidth | Property.ColumnCount | `${Property.ColumnWidth} ${Property.ColumnCount}`;

    export type Contain = "none" | "strict" | "content" | ("size" | "layout" | "style" | "paint" | `${"size"} ${"layout"}` | `${"size"} ${"style"}` | `${"size"} ${"paint"}` | `${"layout"} ${"style"}` | `${"layout"} ${"paint"}` | `${"style"} ${"paint"}` | `${"size"} ${"layout"} ${"style"}` | `${"size"} ${"layout"} ${"paint"}` | `${"size"} ${"style"} ${"paint"}` | `${"layout"} ${"style"} ${"paint"}` | `${"size"} ${"layout"} ${"style"} ${"paint"}`);

    export type Content = "normal" | "none" | `${DataType.ContentReplacement | DataType.ContentList}${"" | ` ${`${"/"} ${DataType.String}`}`}`;

    export type CounterIncrement = (`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}` | `${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`} ${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`}` | `${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`} ${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`} ${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`}`) | "none";

    export type CounterReset = (`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}` | `${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`} ${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`}` | `${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`} ${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`} ${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`}`) | "none";

    export type CounterSet = (`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}` | `${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`} ${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`}` | `${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`} ${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`} ${`${DataType.CustomIdent}${"" | ` ${DataType.Integer}`}`}`) | "none";

    export type Cursor = `${`${DataType.Url}${"" | ` ${`${DataType.X} ${DataType.Y}`}`} ${","}` | `${`${DataType.Url}${"" | ` ${`${DataType.X} ${DataType.Y}`}`} ${","}`} ${`${DataType.Url}${"" | ` ${`${DataType.X} ${DataType.Y}`}`} ${","}`}` | `${`${DataType.Url}${"" | ` ${`${DataType.X} ${DataType.Y}`}`} ${","}`} ${`${DataType.Url}${"" | ` ${`${DataType.X} ${DataType.Y}`}`} ${","}`} ${`${DataType.Url}${"" | ` ${`${DataType.X} ${DataType.Y}`}`} ${","}`}`} ${"auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "all-scroll" | "zoom-in" | "zoom-out" | "grab" | "grabbing"}`;

    export type Direction = "ltr" | "rtl";

    export type Display = (DataType.DisplayOutside | DataType.DisplayInside | `${DataType.DisplayOutside} ${DataType.DisplayInside}`) | DataType.DisplayListitem | DataType.DisplayInternal | DataType.DisplayBox | DataType.DisplayLegacy;

    export type EmptyCells = "show" | "hide";

    export type Filter = "none" | DataType.FilterFunctionList;

    export type FlexGrow = DataType.Number;

    export type FlexShrink = DataType.Number;

    export type FlexBasis = "content" | Property.Width;

    export type Flex = "none" | (`${Property.FlexGrow}${"" | ` ${Property.FlexShrink}`}` | Property.FlexBasis | `${`${Property.FlexGrow} ${Property.FlexShrink}`} ${Property.FlexBasis}`);

    export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

    export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

    export type FlexFlow = Property.FlexDirection | Property.FlexWrap | `${Property.FlexDirection} ${Property.FlexWrap}`;

    export type Float = "left" | "right" | "none" | "inline-start" | "inline-end";

    export type FontStyle = "normal" | "italic" | `${"oblique"}${"" | ` ${DataType.Angle}`}`;

    export type FontWeight = DataType.FontWeightAbsolute | "bolder" | "lighter";

    export type FontStretch = DataType.FontStretchAbsolute;

    export type FontSize = DataType.AbsoluteSize | DataType.RelativeSize | DataType.LengthPercentage;

    export type LineHeight = "normal" | DataType.Number | DataType.Length | DataType.Percentage;

    export type FontFamily = (DataType.FamilyName | DataType.GenericFamily) | `${DataType.FamilyName | DataType.GenericFamily}, ${DataType.FamilyName | DataType.GenericFamily}` | `${DataType.FamilyName | DataType.GenericFamily}, ${DataType.FamilyName | DataType.GenericFamily}, ${DataType.FamilyName | DataType.GenericFamily}`;

    export type Font = `${Property.FontStyle | DataType.FontVariantCss21 | Property.FontWeight | Property.FontStretch | `${Property.FontStyle} ${DataType.FontVariantCss21}` | `${Property.FontStyle} ${Property.FontWeight}` | `${Property.FontStyle} ${Property.FontStretch}` | `${DataType.FontVariantCss21} ${Property.FontWeight}` | `${DataType.FontVariantCss21} ${Property.FontStretch}` | `${Property.FontWeight} ${Property.FontStretch}` | `${Property.FontStyle} ${DataType.FontVariantCss21} ${Property.FontWeight}` | `${Property.FontStyle} ${DataType.FontVariantCss21} ${Property.FontStretch}` | `${Property.FontStyle} ${Property.FontWeight} ${Property.FontStretch}` | `${DataType.FontVariantCss21} ${Property.FontWeight} ${Property.FontStretch}` | `${Property.FontStyle} ${DataType.FontVariantCss21} ${Property.FontWeight} ${Property.FontStretch}`} ${Property.FontSize}${"" | ` ${`${"/"} ${Property.LineHeight}`}`} ${Property.FontFamily}` | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar";

    export type FontFeatureSettings = "normal" | DataType.FeatureTagValue;

    export type FontKerning = "auto" | "normal" | "none";

    export type FontLanguageOverride = "normal" | DataType.String;

    export type FontOpticalSizing = "auto" | "none";

    export type FontVariationSettings = "normal" | (`${DataType.String} ${DataType.Number}` | `${`${DataType.String} ${DataType.Number}`}, ${`${DataType.String} ${DataType.Number}`}` | `${`${DataType.String} ${DataType.Number}`}, ${`${DataType.String} ${DataType.Number}`}, ${`${DataType.String} ${DataType.Number}`}`);

    export type FontSizeAdjust = "none" | DataType.Number;

    export type FontSmooth = "auto" | "never" | "always" | DataType.AbsoluteSize | DataType.Length;

    export type FontSynthesis = "none" | ("weight" | "style" | `${"weight"} ${"style"}`);

    export type FontVariantAlternates = "normal" | (Method.Stylistic | "historical-forms" | Method.Styleset | Method.CharacterVariant | Method.Swash | Method.Ornaments | Method.Annotation | `${Method.Stylistic} ${"historical-forms"}` | `${Method.Stylistic} ${Method.Styleset}` | `${Method.Stylistic} ${Method.CharacterVariant}` | `${Method.Stylistic} ${Method.Swash}` | `${Method.Stylistic} ${Method.Ornaments}` | `${Method.Stylistic} ${Method.Annotation}` | `${"historical-forms"} ${Method.Styleset}` | `${"historical-forms"} ${Method.CharacterVariant}` | `${"historical-forms"} ${Method.Swash}` | `${"historical-forms"} ${Method.Ornaments}` | `${"historical-forms"} ${Method.Annotation}` | `${Method.Styleset} ${Method.CharacterVariant}` | `${Method.Styleset} ${Method.Swash}` | `${Method.Styleset} ${Method.Ornaments}` | `${Method.Styleset} ${Method.Annotation}` | `${Method.CharacterVariant} ${Method.Swash}` | `${Method.CharacterVariant} ${Method.Ornaments}` | `${Method.CharacterVariant} ${Method.Annotation}` | `${Method.Swash} ${Method.Ornaments}` | `${Method.Swash} ${Method.Annotation}` | `${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset}` | `${Method.Stylistic} ${"historical-forms"} ${Method.CharacterVariant}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Swash}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Ornaments}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Styleset} ${Method.CharacterVariant}` | `${Method.Stylistic} ${Method.Styleset} ${Method.Swash}` | `${Method.Stylistic} ${Method.Styleset} ${Method.Ornaments}` | `${Method.Stylistic} ${Method.Styleset} ${Method.Annotation}` | `${Method.Stylistic} ${Method.CharacterVariant} ${Method.Swash}` | `${Method.Stylistic} ${Method.CharacterVariant} ${Method.Ornaments}` | `${Method.Stylistic} ${Method.CharacterVariant} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Swash} ${Method.Ornaments}` | `${Method.Stylistic} ${Method.Swash} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Ornaments} ${Method.Annotation}` | `${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant}` | `${"historical-forms"} ${Method.Styleset} ${Method.Swash}` | `${"historical-forms"} ${Method.Styleset} ${Method.Ornaments}` | `${"historical-forms"} ${Method.Styleset} ${Method.Annotation}` | `${"historical-forms"} ${Method.CharacterVariant} ${Method.Swash}` | `${"historical-forms"} ${Method.CharacterVariant} ${Method.Ornaments}` | `${"historical-forms"} ${Method.CharacterVariant} ${Method.Annotation}` | `${"historical-forms"} ${Method.Swash} ${Method.Ornaments}` | `${"historical-forms"} ${Method.Swash} ${Method.Annotation}` | `${"historical-forms"} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash}` | `${Method.Styleset} ${Method.CharacterVariant} ${Method.Ornaments}` | `${Method.Styleset} ${Method.CharacterVariant} ${Method.Annotation}` | `${Method.Styleset} ${Method.Swash} ${Method.Ornaments}` | `${Method.Styleset} ${Method.Swash} ${Method.Annotation}` | `${Method.Styleset} ${Method.Ornaments} ${Method.Annotation}` | `${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments}` | `${Method.CharacterVariant} ${Method.Swash} ${Method.Annotation}` | `${Method.CharacterVariant} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.Swash}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.Ornaments}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.CharacterVariant} ${Method.Swash}` | `${Method.Stylistic} ${"historical-forms"} ${Method.CharacterVariant} ${Method.Ornaments}` | `${Method.Stylistic} ${"historical-forms"} ${Method.CharacterVariant} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Swash} ${Method.Ornaments}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Swash} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash}` | `${Method.Stylistic} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Ornaments}` | `${Method.Stylistic} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Styleset} ${Method.Swash} ${Method.Ornaments}` | `${Method.Stylistic} ${Method.Styleset} ${Method.Swash} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Styleset} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments}` | `${Method.Stylistic} ${Method.CharacterVariant} ${Method.Swash} ${Method.Annotation}` | `${Method.Stylistic} ${Method.CharacterVariant} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash}` | `${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Ornaments}` | `${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Annotation}` | `${"historical-forms"} ${Method.Styleset} ${Method.Swash} ${Method.Ornaments}` | `${"historical-forms"} ${Method.Styleset} ${Method.Swash} ${Method.Annotation}` | `${"historical-forms"} ${Method.Styleset} ${Method.Ornaments} ${Method.Annotation}` | `${"historical-forms"} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments}` | `${"historical-forms"} ${Method.CharacterVariant} ${Method.Swash} ${Method.Annotation}` | `${"historical-forms"} ${Method.CharacterVariant} ${Method.Ornaments} ${Method.Annotation}` | `${"historical-forms"} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments}` | `${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Annotation}` | `${Method.Styleset} ${Method.CharacterVariant} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Styleset} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Ornaments}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.Swash} ${Method.Ornaments}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.Swash} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments}` | `${Method.Stylistic} ${"historical-forms"} ${Method.CharacterVariant} ${Method.Swash} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.CharacterVariant} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments}` | `${Method.Stylistic} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Styleset} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments}` | `${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Annotation}` | `${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Ornaments} ${Method.Annotation}` | `${"historical-forms"} ${Method.Styleset} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${"historical-forms"} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}` | `${Method.Stylistic} ${"historical-forms"} ${Method.Styleset} ${Method.CharacterVariant} ${Method.Swash} ${Method.Ornaments} ${Method.Annotation}`);

    export type FontVariantCaps = "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps";

    export type FontVariantEastAsian = "normal" | (DataType.EastAsianVariantValues | DataType.EastAsianWidthValues | "ruby" | `${DataType.EastAsianVariantValues} ${DataType.EastAsianWidthValues}` | `${DataType.EastAsianVariantValues} ${"ruby"}` | `${DataType.EastAsianWidthValues} ${"ruby"}` | `${DataType.EastAsianVariantValues} ${DataType.EastAsianWidthValues} ${"ruby"}`);

    export type FontVariantLigatures = "normal" | "none" | (DataType.CommonLigValues | DataType.DiscretionaryLigValues | DataType.HistoricalLigValues | DataType.ContextualAltValues | `${DataType.CommonLigValues} ${DataType.DiscretionaryLigValues}` | `${DataType.CommonLigValues} ${DataType.HistoricalLigValues}` | `${DataType.CommonLigValues} ${DataType.ContextualAltValues}` | `${DataType.DiscretionaryLigValues} ${DataType.HistoricalLigValues}` | `${DataType.DiscretionaryLigValues} ${DataType.ContextualAltValues}` | `${DataType.HistoricalLigValues} ${DataType.ContextualAltValues}` | `${DataType.CommonLigValues} ${DataType.DiscretionaryLigValues} ${DataType.HistoricalLigValues}` | `${DataType.CommonLigValues} ${DataType.DiscretionaryLigValues} ${DataType.ContextualAltValues}` | `${DataType.CommonLigValues} ${DataType.HistoricalLigValues} ${DataType.ContextualAltValues}` | `${DataType.DiscretionaryLigValues} ${DataType.HistoricalLigValues} ${DataType.ContextualAltValues}` | `${DataType.CommonLigValues} ${DataType.DiscretionaryLigValues} ${DataType.HistoricalLigValues} ${DataType.ContextualAltValues}`);

    export type FontVariantNumeric = "normal" | (DataType.NumericFigureValues | DataType.NumericSpacingValues | DataType.NumericFractionValues | "ordinal" | "slashed-zero" | `${DataType.NumericFigureValues} ${DataType.NumericSpacingValues}` | `${DataType.NumericFigureValues} ${DataType.NumericFractionValues}` | `${DataType.NumericFigureValues} ${"ordinal"}` | `${DataType.NumericFigureValues} ${"slashed-zero"}` | `${DataType.NumericSpacingValues} ${DataType.NumericFractionValues}` | `${DataType.NumericSpacingValues} ${"ordinal"}` | `${DataType.NumericSpacingValues} ${"slashed-zero"}` | `${DataType.NumericFractionValues} ${"ordinal"}` | `${DataType.NumericFractionValues} ${"slashed-zero"}` | `${"ordinal"} ${"slashed-zero"}` | `${DataType.NumericFigureValues} ${DataType.NumericSpacingValues} ${DataType.NumericFractionValues}` | `${DataType.NumericFigureValues} ${DataType.NumericSpacingValues} ${"ordinal"}` | `${DataType.NumericFigureValues} ${DataType.NumericSpacingValues} ${"slashed-zero"}` | `${DataType.NumericFigureValues} ${DataType.NumericFractionValues} ${"ordinal"}` | `${DataType.NumericFigureValues} ${DataType.NumericFractionValues} ${"slashed-zero"}` | `${DataType.NumericFigureValues} ${"ordinal"} ${"slashed-zero"}` | `${DataType.NumericSpacingValues} ${DataType.NumericFractionValues} ${"ordinal"}` | `${DataType.NumericSpacingValues} ${DataType.NumericFractionValues} ${"slashed-zero"}` | `${DataType.NumericSpacingValues} ${"ordinal"} ${"slashed-zero"}` | `${DataType.NumericFractionValues} ${"ordinal"} ${"slashed-zero"}` | `${DataType.NumericFigureValues} ${DataType.NumericSpacingValues} ${DataType.NumericFractionValues} ${"ordinal"}` | `${DataType.NumericFigureValues} ${DataType.NumericSpacingValues} ${DataType.NumericFractionValues} ${"slashed-zero"}` | `${DataType.NumericFigureValues} ${DataType.NumericSpacingValues} ${"ordinal"} ${"slashed-zero"}` | `${DataType.NumericFigureValues} ${DataType.NumericFractionValues} ${"ordinal"} ${"slashed-zero"}` | `${DataType.NumericSpacingValues} ${DataType.NumericFractionValues} ${"ordinal"} ${"slashed-zero"}` | `${DataType.NumericFigureValues} ${DataType.NumericSpacingValues} ${DataType.NumericFractionValues} ${"ordinal"} ${"slashed-zero"}`);

    export type FontVariantPosition = "normal" | "sub" | "super";

    export type RowGap = "normal" | DataType.LengthPercentage;

    export type Gap = `${Property.RowGap}${"" | ` ${Property.ColumnGap}`}`;

    export type GridTemplateRows = "none" | DataType.TrackList | DataType.AutoTrackList;

    export type GridTemplateColumns = "none" | DataType.TrackList | DataType.AutoTrackList;

    export type GridTemplate = "none" | `${Property.GridTemplateRows} ${"/"} ${Property.GridTemplateColumns}` | `${`${DataType.LineNames} ${DataType.String}${"" | ` ${DataType.TrackSize}`}${"" | ` ${DataType.LineNames}`}` | `${`${DataType.LineNames} ${DataType.String}${"" | ` ${DataType.TrackSize}`}${"" | ` ${DataType.LineNames}`}`} ${`${DataType.LineNames} ${DataType.String}${"" | ` ${DataType.TrackSize}`}${"" | ` ${DataType.LineNames}`}`}` | `${`${DataType.LineNames} ${DataType.String}${"" | ` ${DataType.TrackSize}`}${"" | ` ${DataType.LineNames}`}`} ${`${DataType.LineNames} ${DataType.String}${"" | ` ${DataType.TrackSize}`}${"" | ` ${DataType.LineNames}`}`} ${`${DataType.LineNames} ${DataType.String}${"" | ` ${DataType.TrackSize}`}${"" | ` ${DataType.LineNames}`}`}`}${"" | ` ${`${"/"} ${DataType.ExplicitTrackList}`}`}`;

    export type GridAutoColumns = DataType.TrackSize;

    export type GridAutoRows = DataType.TrackSize;

    export type Grid = Property.GridTemplate | `${Property.GridTemplateRows} ${"/"} ${`${"auto-flow"} ${"dense"}`}${"" | ` ${Property.GridAutoColumns}`}` | `${`${"auto-flow"} ${"dense"}`}${"" | ` ${Property.GridAutoRows}`} ${"/"} ${Property.GridTemplateColumns}`;

    export type GridArea = `${DataType.GridLine} ${`${"/"} ${DataType.GridLine}` | `${`${"/"} ${DataType.GridLine}`} ${`${"/"} ${DataType.GridLine}`}` | `${`${"/"} ${DataType.GridLine}`} ${`${"/"} ${DataType.GridLine}`} ${`${"/"} ${DataType.GridLine}`}`}`;

    export type GridAutoFlow = ("row" | "column") | "dense" | `${"row" | "column"} ${"dense"}`;

    export type GridColumn = `${DataType.GridLine}${"" | ` ${`${"/"} ${DataType.GridLine}`}`}`;

    export type GridColumnEnd = DataType.GridLine;

    export type GridColumnGap = DataType.LengthPercentage;

    export type GridColumnStart = DataType.GridLine;

    export type GridRowGap = DataType.LengthPercentage;

    export type GridGap = `${Property.GridRowGap}${"" | ` ${Property.GridColumnGap}`}`;

    export type GridRow = `${DataType.GridLine}${"" | ` ${`${"/"} ${DataType.GridLine}`}`}`;

    export type GridRowEnd = DataType.GridLine;

    export type GridRowStart = DataType.GridLine;

    export type GridTemplateAreas = "none" | DataType.String;

    export type HangingPunctuation = "none" | ("first" | ("force-end" | "allow-end") | "last" | `${"first"} ${"force-end" | "allow-end"}` | `${"first"} ${"last"}` | `${"force-end" | "allow-end"} ${"last"}` | `${"first"} ${"force-end" | "allow-end"} ${"last"}`);

    export type Height = "auto" | DataType.Length | DataType.Percentage | "min-content" | "max-content" | Method.FitContent;

    export type Hyphens = "none" | "manual" | "auto";

    export type ImageOrientation = "from-image" | DataType.Angle | `${DataType.Angle} ${"flip"}`;

    export type ImageRendering = "auto" | "crisp-edges" | "pixelated";

    export type ImageResolution = `${"from-image" | DataType.Resolution | `${"from-image"} ${DataType.Resolution}`} ${"snap"}`;

    export type ImeMode = "auto" | "normal" | "active" | "inactive" | "disabled";

    export type InitialLetter = "normal" | `${DataType.Number}${"" | ` ${DataType.Integer}`}`;

    export type InitialLetterAlign = "auto" | "alphabetic" | "hanging" | "ideographic";

    export type InlineSize = Property.Width;

    export type Top = DataType.Length | DataType.Percentage | "auto";

    export type Inset = Property.Top;

    export type InsetBlock = Property.Top;

    export type InsetBlockEnd = Property.Top;

    export type InsetBlockStart = Property.Top;

    export type InsetInline = Property.Top;

    export type InsetInlineEnd = Property.Top;

    export type InsetInlineStart = Property.Top;

    export type Isolation = "auto" | "isolate";

    export type JustifyContent = "normal" | DataType.ContentDistribution | `${DataType.OverflowPosition} ${DataType.ContentPosition | "left" | "right"}`;

    export type JustifyItems = "normal" | "stretch" | DataType.BaselinePosition | `${DataType.OverflowPosition} ${DataType.SelfPosition | "left" | "right"}` | "legacy" | (`${"legacy"} ${"left" | "right" | "center"}`);

    export type JustifySelf = "auto" | "normal" | "stretch" | DataType.BaselinePosition | `${DataType.OverflowPosition} ${DataType.SelfPosition | "left" | "right"}`;

    export type Left = DataType.Length | DataType.Percentage | "auto";

    export type LetterSpacing = "normal" | DataType.Length;

    export type LineBreak = "auto" | "loose" | "normal" | "strict" | "anywhere";

    export type LineClamp = "none" | DataType.Integer;

    export type LineHeightStep = DataType.Length;

    export type ListStyleType = DataType.CounterStyle | DataType.String | "none";

    export type ListStylePosition = "inside" | "outside";

    export type ListStyleImage = DataType.Url | "none";

    export type ListStyle = Property.ListStyleType | Property.ListStylePosition | Property.ListStyleImage | `${Property.ListStyleType} ${Property.ListStylePosition}` | `${Property.ListStyleType} ${Property.ListStyleImage}` | `${Property.ListStylePosition} ${Property.ListStyleImage}` | `${Property.ListStyleType} ${Property.ListStylePosition} ${Property.ListStyleImage}`;

    export type Margin = (DataType.Length | DataType.Percentage | "auto") | `${DataType.Length | DataType.Percentage | "auto"} ${DataType.Length | DataType.Percentage | "auto"}` | `${DataType.Length | DataType.Percentage | "auto"} ${DataType.Length | DataType.Percentage | "auto"} ${DataType.Length | DataType.Percentage | "auto"}` | `${DataType.Length | DataType.Percentage | "auto"} ${DataType.Length | DataType.Percentage | "auto"} ${DataType.Length | DataType.Percentage | "auto"} ${DataType.Length | DataType.Percentage | "auto"}`;

    export type MarginLeft = DataType.Length | DataType.Percentage | "auto";

    export type MarginBlock = Property.MarginLeft;

    export type MarginBlockEnd = Property.MarginLeft;

    export type MarginBlockStart = Property.MarginLeft;

    export type MarginBottom = DataType.Length | DataType.Percentage | "auto";

    export type MarginInline = Property.MarginLeft;

    export type MarginInlineEnd = Property.MarginLeft;

    export type MarginInlineStart = Property.MarginLeft;

    export type MarginRight = DataType.Length | DataType.Percentage | "auto";

    export type MarginTop = DataType.Length | DataType.Percentage | "auto";

    export type MarginTrim = "none" | "in-flow" | "all";

    export type MaskBorderSource = "none" | DataType.Image;

    export type MaskBorderSlice = `${DataType.NumberPercentage}${"" | ` ${"fill"}`}`;

    export type MaskBorderWidth = (DataType.LengthPercentage | DataType.Number | "auto") | `${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"}` | `${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"}` | `${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"} ${DataType.LengthPercentage | DataType.Number | "auto"}`;

    export type MaskBorderOutset = (DataType.Length | DataType.Number) | `${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number}` | `${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number}` | `${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number} ${DataType.Length | DataType.Number}`;

    export type MaskBorderRepeat = ("stretch" | "repeat" | "round" | "space") | `${"stretch" | "repeat" | "round" | "space"} ${"stretch" | "repeat" | "round" | "space"}`;

    export type MaskBorderMode = "luminance" | "alpha";

    export type MaskBorder = Property.MaskBorderSource | `${Property.MaskBorderSlice}${"" | ` ${`${"/"}${"" | ` ${Property.MaskBorderWidth}`}${"" | ` ${`${"/"} ${Property.MaskBorderOutset}`}`}`}`}` | Property.MaskBorderRepeat | Property.MaskBorderMode | `${Property.MaskBorderSource} ${`${Property.MaskBorderSlice} ${`${"/"} ${Property.MaskBorderWidth} ${`${"/"} ${Property.MaskBorderOutset}`}`}`}` | `${Property.MaskBorderSource} ${Property.MaskBorderRepeat}` | `${Property.MaskBorderSource} ${Property.MaskBorderMode}` | `${`${Property.MaskBorderSlice} ${`${"/"} ${Property.MaskBorderWidth} ${`${"/"} ${Property.MaskBorderOutset}`}`}`} ${Property.MaskBorderRepeat}` | `${`${Property.MaskBorderSlice} ${`${"/"} ${Property.MaskBorderWidth} ${`${"/"} ${Property.MaskBorderOutset}`}`}`} ${Property.MaskBorderMode}` | `${Property.MaskBorderRepeat} ${Property.MaskBorderMode}` | `${Property.MaskBorderSource} ${`${Property.MaskBorderSlice} ${`${"/"} ${Property.MaskBorderWidth} ${`${"/"} ${Property.MaskBorderOutset}`}`}`} ${Property.MaskBorderRepeat}` | `${Property.MaskBorderSource} ${`${Property.MaskBorderSlice} ${`${"/"} ${Property.MaskBorderWidth} ${`${"/"} ${Property.MaskBorderOutset}`}`}`} ${Property.MaskBorderMode}` | `${Property.MaskBorderSource} ${Property.MaskBorderRepeat} ${Property.MaskBorderMode}` | `${`${Property.MaskBorderSlice} ${`${"/"} ${Property.MaskBorderWidth} ${`${"/"} ${Property.MaskBorderOutset}`}`}`} ${Property.MaskBorderRepeat} ${Property.MaskBorderMode}` | `${Property.MaskBorderSource} ${`${Property.MaskBorderSlice} ${`${"/"} ${Property.MaskBorderWidth} ${`${"/"} ${Property.MaskBorderOutset}`}`}`} ${Property.MaskBorderRepeat} ${Property.MaskBorderMode}`;

    export type MaskClip = (DataType.GeometryBox | "no-clip") | `${DataType.GeometryBox | "no-clip"}, ${DataType.GeometryBox | "no-clip"}` | `${DataType.GeometryBox | "no-clip"}, ${DataType.GeometryBox | "no-clip"}, ${DataType.GeometryBox | "no-clip"}`;

    export type MaskComposite = DataType.CompositingOperator;

    export type MaskImage = DataType.MaskReference;

    export type MaskMode = DataType.MaskingMode;

    export type MaskOrigin = DataType.GeometryBox;

    export type MaskPosition = DataType.Position;

    export type MaskRepeat = DataType.RepeatStyle;

    export type MaskSize = DataType.BgSize;

    export type MaskType = "luminance" | "alpha";

    export type MaxWidth = "auto" | DataType.Length | DataType.Percentage | "min-content" | "max-content" | Method.FitContent;

    export type MaxBlockSize = Property.MaxWidth;

    export type MaxHeight = "auto" | DataType.Length | DataType.Percentage | "min-content" | "max-content" | Method.FitContent;

    export type MaxInlineSize = Property.MaxWidth;

    export type MaxLines = "none" | DataType.Integer;

    export type MinWidth = "auto" | DataType.Length | DataType.Percentage | "min-content" | "max-content" | Method.FitContent;

    export type MinBlockSize = Property.MinWidth;

    export type MinHeight = "auto" | DataType.Length | DataType.Percentage | "min-content" | "max-content" | Method.FitContent;

    export type MinInlineSize = Property.MinWidth;

    export type MixBlendMode = DataType.BlendMode;

    export type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";

    export type ObjectPosition = DataType.Position;

    export type OffsetPosition = "auto" | DataType.Position;

    export type OffsetPath = "none" | Method.Ray | Method.Path | DataType.Url | (DataType.BasicShape | DataType.GeometryBox | `${DataType.BasicShape} ${DataType.GeometryBox}`);

    export type OffsetDistance = DataType.LengthPercentage;

    export type OffsetRotate = ("auto" | "reverse") | DataType.Angle | `${"auto" | "reverse"} ${DataType.Angle}`;

    export type OffsetAnchor = "auto" | DataType.Position;

    export type Offset = `${`${Property.OffsetPosition}${"" | ` ${`${Property.OffsetPath}${"" | ` ${Property.OffsetDistance | Property.OffsetRotate | `${Property.OffsetDistance} ${Property.OffsetRotate}`}`}`}`}`}${"" | ` ${`${"/"} ${Property.OffsetAnchor}`}`}`;

    export type Opacity = DataType.AlphaValue;

    export type Order = DataType.Integer;

    export type Orphans = DataType.Integer;

    export type OutlineColor = DataType.Color | "invert";

    export type OutlineStyle = "auto" | Property.BorderStyle;

    export type OutlineWidth = DataType.LineWidth;

    export type Outline = Property.OutlineColor | Property.OutlineStyle | Property.OutlineWidth | `${Property.OutlineColor} ${Property.OutlineStyle}` | `${Property.OutlineColor} ${Property.OutlineWidth}` | `${Property.OutlineStyle} ${Property.OutlineWidth}` | `${Property.OutlineColor} ${Property.OutlineStyle} ${Property.OutlineWidth}`;

    export type OutlineOffset = DataType.Length;

    export type Overflow = ("visible" | "hidden" | "clip" | "scroll" | "auto") | `${"visible" | "hidden" | "clip" | "scroll" | "auto"} ${"visible" | "hidden" | "clip" | "scroll" | "auto"}`;

    export type OverflowAnchor = "auto" | "none";

    export type OverflowBlock = "visible" | "hidden" | "clip" | "scroll" | "auto";

    export type OverflowClipBox = "padding-box" | "content-box";

    export type OverflowInline = "visible" | "hidden" | "clip" | "scroll" | "auto";

    export type OverflowWrap = "normal" | "break-word" | "anywhere";

    export type OverflowX = "visible" | "hidden" | "clip" | "scroll" | "auto";

    export type OverflowY = "visible" | "hidden" | "clip" | "scroll" | "auto";

    export type OverscrollBehavior = ("contain" | "none" | "auto") | `${"contain" | "none" | "auto"} ${"contain" | "none" | "auto"}`;

    export type OverscrollBehaviorBlock = "contain" | "none" | "auto";

    export type OverscrollBehaviorInline = "contain" | "none" | "auto";

    export type OverscrollBehaviorX = "contain" | "none" | "auto";

    export type OverscrollBehaviorY = "contain" | "none" | "auto";

    export type Padding = (DataType.Length | DataType.Percentage) | `${DataType.Length | DataType.Percentage} ${DataType.Length | DataType.Percentage}` | `${DataType.Length | DataType.Percentage} ${DataType.Length | DataType.Percentage} ${DataType.Length | DataType.Percentage}` | `${DataType.Length | DataType.Percentage} ${DataType.Length | DataType.Percentage} ${DataType.Length | DataType.Percentage} ${DataType.Length | DataType.Percentage}`;

    export type PaddingLeft = DataType.Length | DataType.Percentage;

    export type PaddingBlock = Property.PaddingLeft;

    export type PaddingBlockEnd = Property.PaddingLeft;

    export type PaddingBlockStart = Property.PaddingLeft;

    export type PaddingBottom = DataType.Length | DataType.Percentage;

    export type PaddingInline = Property.PaddingLeft;

    export type PaddingInlineEnd = Property.PaddingLeft;

    export type PaddingInlineStart = Property.PaddingLeft;

    export type PaddingRight = DataType.Length | DataType.Percentage;

    export type PaddingTop = DataType.Length | DataType.Percentage;

    export type PageBreakAfter = "auto" | "always" | "avoid" | "left" | "right" | "recto" | "verso";

    export type PageBreakBefore = "auto" | "always" | "avoid" | "left" | "right" | "recto" | "verso";

    export type PageBreakInside = "auto" | "avoid";

    export type PaintOrder = "normal" | ("fill" | "stroke" | "markers" | `${"fill"} ${"stroke"}` | `${"fill"} ${"markers"}` | `${"stroke"} ${"markers"}` | `${"fill"} ${"stroke"} ${"markers"}`);

    export type Perspective = "none" | DataType.Length;

    export type PerspectiveOrigin = DataType.Position;

    export type PlaceContent = `${Property.AlignContent}${"" | ` ${Property.JustifyContent}`}`;

    export type PlaceItems = `${Property.AlignItems}${"" | ` ${Property.JustifyItems}`}`;

    export type PlaceSelf = `${Property.AlignSelf}${"" | ` ${Property.JustifySelf}`}`;

    export type PointerEvents = "auto" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | "inherit";

    export type Position = "static" | "relative" | "absolute" | "sticky" | "fixed";

    export type Quotes = "none" | "auto" | (`${DataType.String} ${DataType.String}` | `${`${DataType.String} ${DataType.String}`} ${`${DataType.String} ${DataType.String}`}` | `${`${DataType.String} ${DataType.String}`} ${`${DataType.String} ${DataType.String}`} ${`${DataType.String} ${DataType.String}`}`);

    export type Resize = "none" | "both" | "horizontal" | "vertical" | "block" | "inline";

    export type Right = DataType.Length | DataType.Percentage | "auto";

    export type Rotate = "none" | DataType.Angle | (`${"x" | "y" | "z" | DataType.Number} ${DataType.Angle}`);

    export type RubyAlign = "start" | "center" | "space-between" | "space-around";

    export type RubyMerge = "separate" | "collapse" | "auto";

    export type RubyPosition = "over" | "under" | "inter-character";

    export type Scale = "none" | DataType.Number;

    export type ScrollbarColor = "auto" | "dark" | "light" | DataType.Color;

    export type ScrollbarWidth = "auto" | "thin" | "none";

    export type ScrollBehavior = "auto" | "smooth";

    export type ScrollMargin = DataType.Length;

    export type ScrollMarginBlock = DataType.Length;

    export type ScrollMarginBlockStart = DataType.Length;

    export type ScrollMarginBlockEnd = DataType.Length;

    export type ScrollMarginBottom = DataType.Length;

    export type ScrollMarginInline = DataType.Length;

    export type ScrollMarginInlineStart = DataType.Length;

    export type ScrollMarginInlineEnd = DataType.Length;

    export type ScrollMarginLeft = DataType.Length;

    export type ScrollMarginRight = DataType.Length;

    export type ScrollMarginTop = DataType.Length;

    export type ScrollPadding = ("auto" | DataType.LengthPercentage) | `${"auto" | DataType.LengthPercentage} ${"auto" | DataType.LengthPercentage}` | `${"auto" | DataType.LengthPercentage} ${"auto" | DataType.LengthPercentage} ${"auto" | DataType.LengthPercentage}` | `${"auto" | DataType.LengthPercentage} ${"auto" | DataType.LengthPercentage} ${"auto" | DataType.LengthPercentage} ${"auto" | DataType.LengthPercentage}`;

    export type ScrollPaddingBlock = ("auto" | DataType.LengthPercentage) | `${"auto" | DataType.LengthPercentage} ${"auto" | DataType.LengthPercentage}`;

    export type ScrollPaddingBlockStart = "auto" | DataType.LengthPercentage;

    export type ScrollPaddingBlockEnd = "auto" | DataType.LengthPercentage;

    export type ScrollPaddingBottom = "auto" | DataType.LengthPercentage;

    export type ScrollPaddingInline = ("auto" | DataType.LengthPercentage) | `${"auto" | DataType.LengthPercentage} ${"auto" | DataType.LengthPercentage}`;

    export type ScrollPaddingInlineStart = "auto" | DataType.LengthPercentage;

    export type ScrollPaddingInlineEnd = "auto" | DataType.LengthPercentage;

    export type ScrollPaddingLeft = "auto" | DataType.LengthPercentage;

    export type ScrollPaddingRight = "auto" | DataType.LengthPercentage;

    export type ScrollPaddingTop = "auto" | DataType.LengthPercentage;

    export type ScrollSnapAlign = ("none" | "start" | "end" | "center") | `${"none" | "start" | "end" | "center"} ${"none" | "start" | "end" | "center"}`;

    export type ScrollSnapCoordinate = "none" | DataType.Position;

    export type ScrollSnapDestination = DataType.Position;

    export type ScrollSnapPointsX = "none" | Method.Repeat;

    export type ScrollSnapPointsY = "none" | Method.Repeat;

    export type ScrollSnapStop = "normal" | "always";

    export type ScrollSnapType = "none" | `${"x" | "y" | "block" | "inline" | "both"}${"" | ` ${"mandatory" | "proximity"}`}`;

    export type ScrollSnapTypeX = "none" | "mandatory" | "proximity";

    export type ScrollSnapTypeY = "none" | "mandatory" | "proximity";

    export type ShapeImageThreshold = DataType.AlphaValue;

    export type ShapeMargin = DataType.LengthPercentage;

    export type ShapeOutside = "none" | (DataType.ShapeBox | DataType.BasicShape | `${DataType.ShapeBox} ${DataType.BasicShape}`) | DataType.Image;

    export type TabSize = DataType.Integer | DataType.Length;

    export type TableLayout = "auto" | "fixed";

    export type TextAlign = "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";

    export type TextAlignLast = "auto" | "start" | "end" | "left" | "right" | "center" | "justify";

    export type TextCombineUpright = "none" | "all" | `${"digits"}${"" | ` ${DataType.Integer}`}`;

    export type TextDecorationLine = "none" | ("underline" | "overline" | "line-through" | "blink" | `${"underline"} ${"overline"}` | `${"underline"} ${"line-through"}` | `${"underline"} ${"blink"}` | `${"overline"} ${"line-through"}` | `${"overline"} ${"blink"}` | `${"line-through"} ${"blink"}` | `${"underline"} ${"overline"} ${"line-through"}` | `${"underline"} ${"overline"} ${"blink"}` | `${"underline"} ${"line-through"} ${"blink"}` | `${"overline"} ${"line-through"} ${"blink"}` | `${"underline"} ${"overline"} ${"line-through"} ${"blink"}`) | "spelling-error" | "grammar-error";

    export type TextDecorationStyle = "solid" | "double" | "dotted" | "dashed" | "wavy";

    export type TextDecorationColor = DataType.Color;

    export type TextDecorationThickness = "auto" | "from-font" | DataType.Length | DataType.Percentage;

    export type TextDecoration = Property.TextDecorationLine | Property.TextDecorationStyle | Property.TextDecorationColor | Property.TextDecorationThickness | `${Property.TextDecorationLine} ${Property.TextDecorationStyle}` | `${Property.TextDecorationLine} ${Property.TextDecorationColor}` | `${Property.TextDecorationLine} ${Property.TextDecorationThickness}` | `${Property.TextDecorationStyle} ${Property.TextDecorationColor}` | `${Property.TextDecorationStyle} ${Property.TextDecorationThickness}` | `${Property.TextDecorationColor} ${Property.TextDecorationThickness}` | `${Property.TextDecorationLine} ${Property.TextDecorationStyle} ${Property.TextDecorationColor}` | `${Property.TextDecorationLine} ${Property.TextDecorationStyle} ${Property.TextDecorationThickness}` | `${Property.TextDecorationLine} ${Property.TextDecorationColor} ${Property.TextDecorationThickness}` | `${Property.TextDecorationStyle} ${Property.TextDecorationColor} ${Property.TextDecorationThickness}` | `${Property.TextDecorationLine} ${Property.TextDecorationStyle} ${Property.TextDecorationColor} ${Property.TextDecorationThickness}`;

    export type TextDecorationSkip = "none" | ("objects" | ("spaces" | ("leading-spaces" | "trailing-spaces" | `${"leading-spaces"} ${"trailing-spaces"}`)) | "edges" | "box-decoration" | `${"objects"} ${"spaces" | ("leading-spaces" | "trailing-spaces" | `${"leading-spaces"} ${"trailing-spaces"}`)}` | `${"objects"} ${"edges"}` | `${"objects"} ${"box-decoration"}` | `${"spaces" | ("leading-spaces" | "trailing-spaces" | `${"leading-spaces"} ${"trailing-spaces"}`)} ${"edges"}` | `${"spaces" | ("leading-spaces" | "trailing-spaces" | `${"leading-spaces"} ${"trailing-spaces"}`)} ${"box-decoration"}` | `${"edges"} ${"box-decoration"}` | `${"objects"} ${"spaces" | ("leading-spaces" | "trailing-spaces" | `${"leading-spaces"} ${"trailing-spaces"}`)} ${"edges"}` | `${"objects"} ${"spaces" | ("leading-spaces" | "trailing-spaces" | `${"leading-spaces"} ${"trailing-spaces"}`)} ${"box-decoration"}` | `${"objects"} ${"edges"} ${"box-decoration"}` | `${"spaces" | ("leading-spaces" | "trailing-spaces" | `${"leading-spaces"} ${"trailing-spaces"}`)} ${"edges"} ${"box-decoration"}` | `${"objects"} ${"spaces" | ("leading-spaces" | "trailing-spaces" | `${"leading-spaces"} ${"trailing-spaces"}`)} ${"edges"} ${"box-decoration"}`);

    export type TextDecorationSkipInk = "auto" | "all" | "none";

    export type TextEmphasisStyle = "none" | (("filled" | "open") | ("dot" | "circle" | "double-circle" | "triangle" | "sesame") | `${"filled" | "open"} ${"dot" | "circle" | "double-circle" | "triangle" | "sesame"}`) | DataType.String;

    export type TextEmphasisColor = DataType.Color;

    export type TextEmphasis = Property.TextEmphasisStyle | Property.TextEmphasisColor | `${Property.TextEmphasisStyle} ${Property.TextEmphasisColor}`;

    export type TextEmphasisPosition = `${"over" | "under"} ${"right" | "left"}`;

    export type TextIndent = `${DataType.LengthPercentage} ${"hanging"} ${"each-line"}`;

    export type TextJustify = "auto" | "inter-character" | "inter-word" | "none";

    export type TextOrientation = "mixed" | "upright" | "sideways";

    export type TextOverflow = ("clip" | "ellipsis" | DataType.String) | `${"clip" | "ellipsis" | DataType.String} ${"clip" | "ellipsis" | DataType.String}`;

    export type TextRendering = "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision";

    export type TextShadow = "none" | DataType.ShadowT;

    export type TextSizeAdjust = "none" | "auto" | DataType.Percentage;

    export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana";

    export type TextUnderlineOffset = "auto" | DataType.Length | DataType.Percentage;

    export type TextUnderlinePosition = "auto" | "from-font" | ("under" | ("left" | "right") | `${"under"} ${"left" | "right"}`);

    export type TouchAction = "auto" | "none" | (("pan-x" | "pan-left" | "pan-right") | ("pan-y" | "pan-up" | "pan-down") | "pinch-zoom" | `${"pan-x" | "pan-left" | "pan-right"} ${"pan-y" | "pan-up" | "pan-down"}` | `${"pan-x" | "pan-left" | "pan-right"} ${"pinch-zoom"}` | `${"pan-y" | "pan-up" | "pan-down"} ${"pinch-zoom"}` | `${"pan-x" | "pan-left" | "pan-right"} ${"pan-y" | "pan-up" | "pan-down"} ${"pinch-zoom"}`) | "manipulation";

    export type Transform = "none" | DataType.TransformList;

    export type TransformBox = "content-box" | "border-box" | "fill-box" | "stroke-box" | "view-box";

    export type TransformOrigin = (DataType.LengthPercentage | "left" | "center" | "right" | "top" | "bottom") | `${`${DataType.LengthPercentage | "left" | "center" | "right"} ${DataType.LengthPercentage | "top" | "center" | "bottom"}`}${"" | ` ${DataType.Length}`}`;

    export type TransformStyle = "flat" | "preserve-3d";

    export type Transition = DataType.SingleTransition;

    export type TransitionDelay = DataType.Time;

    export type TransitionDuration = DataType.Time;

    export type TransitionProperty = "none" | DataType.SingleTransitionProperty;

    export type TransitionTimingFunction = DataType.TimingFunction;

    export type Translate = "none" | `${DataType.LengthPercentage}${"" | ` ${`${DataType.LengthPercentage}${"" | ` ${DataType.Length}`}`}`}`;

    export type UnicodeBidi = "normal" | "embed" | "isolate" | "bidi-override" | "isolate-override" | "plaintext";

    export type UserSelect = "auto" | "text" | "none" | "contain" | "all";

    export type VerticalAlign = "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom" | DataType.Percentage | DataType.Length;

    export type Visibility = "visible" | "hidden" | "collapse";

    export type WhiteSpace = "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line" | "break-spaces";

    export type Widows = DataType.Integer;

    export type WillChange = "auto" | DataType.AnimateableFeature;

    export type WordBreak = "normal" | "break-all" | "keep-all" | "break-word";

    export type WordSpacing = "normal" | DataType.LengthPercentage;

    export type WordWrap = "normal" | "break-word";

    export type WritingMode = "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";

    export type ZIndex = "auto" | DataType.Integer;

    export type Zoom = "normal" | "reset" | DataType.Number | DataType.Percentage;

}